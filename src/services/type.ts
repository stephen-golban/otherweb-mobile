import { EndpointBuilder as EP } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';

export type EndpointBuilder = EP<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, 'api'>;
