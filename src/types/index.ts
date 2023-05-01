export type TContext = {
  activeTabName: string;
  setActiveTabName: Function;
  handleTabClick: Function;
  filteredHospices: any[];
  isFetching: boolean;
  openReferalModal: boolean;
  setOpenReferalModal: Function;
};

export type TLogin = {
  email: string | null;
  password: string | null;
};

export type TLogout = {
  token: string;
};
