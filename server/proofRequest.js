const { ProofOfDaoLongevity	} = require("./vcHelpers/ProofOfDaoLongevity");

// design your own customised authentication requirement here using Query Language
// https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/

const humanReadableAuthReason = "Must be in DAO before this dadte";

const credentialSubject = {
  entryDate: {
    // users must be born before this year
    // birthday is less than Jan 1, 2023
    $lt: 20230101,
  },
};

const proofRequest = ProofOfDaoLongevity(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
