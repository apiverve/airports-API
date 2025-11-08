declare module '@apiverve/airports' {
  export interface airportsOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface airportsResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class airportsWrapper {
    constructor(options: airportsOptions);

    execute(callback: (error: any, data: airportsResponse | null) => void): Promise<airportsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: airportsResponse | null) => void): Promise<airportsResponse>;
    execute(query?: Record<string, any>): Promise<airportsResponse>;
  }
}
