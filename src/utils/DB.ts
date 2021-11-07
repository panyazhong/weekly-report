const electron = (window as any).electron;
const remote = (window as any).remote;
export const getDB = (dbName: string) => {
  console.log('remote', remote);
  return remote.getGlobal('nedb')[dbName];
};

export interface DB_PARAM_PROPS {
  [key: string]: string;
}

export interface DB_OPTION_PROPS {
  [key: string]: any;
}

export const findOne = <T>(
  dbName: string,
  params: DB_PARAM_PROPS
): Promise<T> => {
  const DB = getDB(dbName);

  return new Promise((resolve, reject) => {
    DB.findOne(params, (err: Error, ret: T) => {
      if (err) {
        reject(err);
      } else {
        resolve(ret);
      }
    });
  });
};

export const find = <T>(
  dbName: string,
  params: DB_PARAM_PROPS
): Promise<T[]> => {
  const DB = getDB(dbName);

  return new Promise((resolve, reject) => {
    DB.find(params, (err: Error, ret: T[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(ret);
      }
    });
  });
};

export const insert = (
  dbName: string,
  params: DB_PARAM_PROPS | DB_PARAM_PROPS[]
): Promise<Error | number> => {
  const DB = getDB(dbName);

  return new Promise((resolve, reject) => {
    DB.insert(params, (err: Error, ret: number) => {
      if (err) {
        reject(err);
      } else {
        console.log('res', ret);
        resolve(ret);
      }
    });
  });
};

export const update = (
  dbName: string,
  query: any,
  params: any,
  options: any
): Promise<Error | number> => {
  const DB = getDB(dbName);

  return new Promise((resolve, reject) => {
    DB.update(query, params, options, (err: Error, ret: number) => {
      if (err) {
        reject(err);
      } else {
        resolve(ret);
      }
    });
  });
};
