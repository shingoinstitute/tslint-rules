'use strict';

module.exports = {
    extends: ['tslint:latest'],
    rules: {
        "arrow-parens": { options: ["ban-single-arg-parens"] },
        "curly": { options: ["ignore-same-line"] },
        "interface-name": { options: ["never-prefix"] },
        // class members should be grouped by how they relate to each other not by access or type
        "member-ordering": false,
        // requiring members to be marked as public just adds noise
        "member-access": { options: ["no-public"] },
        "no-implicit-dependencies": { options: ["dev"] },
        "no-unused-variable": { options: ["allow-leading-underscore"] },
        // increases maintenance while providing little benefit
        // (object keys are usally grouped by a different metric than lexical position)
        "object-literal-sort-keys": false,
        // Ordering imports provides little benefit while increasing maintenance
        "ordered-imports": false,
        "quotemark": { options: ["single"] },
        // this is mostly stylistic, but js doesn't require parens and they create noise
        "semicolon": { options: ["never"] },
        "trailing-comma": {
            options: {
                "esSpecCompliant": true,
                "multiline": {
                    "objects": "always",
                    "arrays": "always",
                    "functions": "never"
                },
                "singleline": "never"
            }
        },
        "variable-name": { options: ["allow-leading-underscore"] },
    }
}
