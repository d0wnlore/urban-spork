module.exports = {
  // VC type: ProofOfDaoLongevity
  // https://raw.githubusercontent.com/0xPolygonID/tutorial-examples/main/credential-schema/proof-of-dao-longevity.jsonld
  ProofOfDaoLongevity	: (credentialSubject) => ({
    id: 1,
    circuitId: "credentialAtomicQuerySigV2",
    query: {
      allowedIssuers: ["*"],
      type: "ProofOfDaoLongevity",
      context:
        "https://raw.githubusercontent.com/0xPolygonID/tutorial-examples/main/credential-schema/proof-of-dao-longevity.jsonld",
      credentialSubject,
    },
  }),
  // See more off-chain examples
  // https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/#equals-operator-1
};
