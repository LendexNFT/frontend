/* eslint-disable import/prefer-default-export */
let networks = [];
if (process.env.NODE_ENV !== "production") {
  networks = [
    {
      id: 80001,
      name: "Mumbai",
      icon: "",
      currency: "MATIC",
      provider: null,
    },
  ];
} else {
  networks = [
    {
      id: 137,
      name: "Polygon",
      icon: "",
      currency: "MATIC",
      provider: null,
    },
  ];
}

export const NETWORKS = networks;
