import * as ws from "ws";

import { CreateTRPCProxyClient, createTRPCProxyClient, createWSClient, wsLink } from "@trpc/client";
import type { AppRouter } from "server";

Object.assign(global, { WebSocket: ws.WebSocket });

let client: CreateTRPCProxyClient<AppRouter> | undefined;

export function getClient() {
  if (!client) {
    // create persistent WebSocket connection
    const wsClient = createWSClient({
      url: `ws://localhost:3001`,
    });

    // configure TRPCClient to use WebSockets transport
    client = createTRPCProxyClient<AppRouter>({
      links: [
        wsLink({
          client: wsClient,
        }),
      ],
    });
  }

  return client;
}