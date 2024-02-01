// TODO: implement embedding logic..probably also want retry behavior. see the openaiEmbedder for an example

import { Embedder } from "mongodb-rag-core";

interface VertexAiEmbedderConfig {}
// implementation
export const makeVertexAiEmbedder = (
  config: VertexAiEmbedderConfig
): Embedder => {
  return async () => {
    return [];
  };
};
