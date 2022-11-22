import { IUser } from "src/components/types/models";

const gtihubApi = "https://api.github.com";

const fetchGithubUser = async (userName: string): Promise<IUser> => {
  const response = await fetch(`${gtihubApi}/users/${userName}`);
  if (!response.ok) throw new Error();
  return response.json();
};

export default fetchGithubUser;
