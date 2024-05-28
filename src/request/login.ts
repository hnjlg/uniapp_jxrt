import { request } from '.';
import type { RequestOptions } from '.';

export const login = async (options: RequestOptions): Promise<any> => {
	return request(options);
};
