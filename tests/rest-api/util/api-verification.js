import {deepCompare} from './object-utils'
class ApiVerification {
    /**
     *
     * @param {Object} expected
     * @param {Object} actual
     */
    verify(
        expected,
        actual,
    ) {
        const propertyList = Object.getOwnPropertyNames(expected);

        for (const property of propertyList) {
            const isObject = expected[property] instanceof Object;
            if (!isObject) {
                this._compareProperty(
                    property,
                    expected,
                    actual
                );
            } else {
                this._verifyDestinationPropertyExisted(
                    property,
                    expected,
                    actual
                );

                this.verify(
                    expected[property],
                    actual[property],
                );
            }
        }
    }

    _compareProperty(
        propertyName,
        jsonSource,
        jsonDestination
    ) {
        assert.isTrue(
            deepCompare(
                jsonSource[propertyName],
                jsonDestination[propertyName]
            ),
            this._generateFailedMessage(
                propertyName,
                jsonSource,
                jsonDestination
            )
        );
    }


    _verifyDestinationPropertyExisted(
        propertyName,
        jsonSource,
        jsonDestination
    ) {
        assert.isTrue(
            typeof jsonDestination[propertyName] !== 'undefined',
            this._generateFailedMessage(
                propertyName,
                jsonSource,
                jsonDestination
            )
        );
    }

    _generateFailedMessage(
        propertyName,
        jsonSource,
        jsonDestination
    ) {
        return `FAILED:
            \n The ${propertyName} property does not match,\n   expected: ${JSON.stringify(
            jsonSource[propertyName]
        )} \n\n but actual: ${JSON.stringify(jsonDestination[propertyName])}\n`;
    }
}


module.exports = new ApiVerification();
