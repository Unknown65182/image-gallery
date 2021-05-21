import fetch from 'isomorphic-unfetch';

const fetcher = async (input: RequestInfo, init?: RequestInit): Promise<any> => {
  try {
    const res = await fetch(input, init);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetcher;
