import { BaseQueryApi } from '@reduxjs/toolkit/query/react';
import { TProduct } from './products.types';

export type TError = {
  data: {
    message: string;
    stake: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit?: number;
  page?: number;
  total?: number;
  totalPage?: number;
};

export type TResponse = {
  data?: {
    result?: TProduct ;         // Use result here to wrap the actual data array
    meta?: TMeta;       // Optional meta property
  };
  message?: string;
  success?: boolean;
  meta?: TMeta;
  error?: TError;
};

export type TResponseRedux = TResponse & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};