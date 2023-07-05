module.exports = {
  // VC type: POKAntiPhishing
  // https://raw.githubusercontent.com/d0wnlore/urban-spork/d0wnlore_idThon/credential-schema/pok-anti-phishing.jsonld
  POKAntiPhishing	: (credentialSubject) => ({
    id: 1,
    circuitId: "credentialAtomicQuerySigV2",
    query: {
      allowedIssuers: ["*"],
      type: "POKAntiPhishing",
      context:
        "https://raw.githubusercontent.com/d0wnlore/urban-spork/d0wnlore_idThon/credential-schema/pok-anti-phishing.jsonld",
      credentialSubject,
    },
  }),
  // See more off-chain examples
  // https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/#equals-operator-1
};
