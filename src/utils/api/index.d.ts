type ApiRequestConfig = import('axios').AxiosRequestConfig;

type AxiosRequestConfig<Params = undefined> = Params extends undefined
  ? { config?: ApiRequestConfig }
  : { params: Params; config?: ApiRequestConfig };

interface QuerySettings<Func = unknown> {
  config?: import('axios').AxiosRequestConfig;
  options?: Omit<
    import('@tanstack/react-query').UseQueryOptions<Awaited<ReturnType<Func>>, any, Awaited<ReturnType<Func>>, any>,
    'queryKey'
  >;
}

interface MutationSettings<Func = unknown> {
  config?: ApiRequestConfig;
  options?: import('@tanstack/react-query').UseMutationOptions<Awaited<ReturnType<Func>>, any, Params, any>;
}
