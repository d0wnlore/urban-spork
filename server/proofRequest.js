const { POKAntiPhishing	} = require("./vcHelpers/POKAntiPhishing");

// design your own customised authentication requirement here using Query Language
// https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/

const humanReadableAuthReason = "Must have passed at least one anti-phishing quiz";

const credentialSubject = {
  numQuizPassed: {
    // users must have passed at least
    // one anti-phishing quiz
    $gt: 0,
  },
};

const proofRequest = POKAntiPhishing(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
