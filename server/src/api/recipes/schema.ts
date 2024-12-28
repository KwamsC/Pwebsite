export const recipeSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    title: { type: "string" },
    author: { type: "string" },
    description: { type: "string" },
    ingredients: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          quantity: { type: "string" },
        },
        required: ["name", "quantity"],
      },
    },
    instructions: {
      type: "array",
      items: { type: "string" },
    },
    servings: { type: "number" },
    prepTime: { type: "string" },
    cookTime: { type: "string" },
    totalTime: { type: "string" },
    difficulty: { type: "string", enum: ["Easy", "Medium", "Hard"] },
    cuisine: { type: "string" },
    mealType: { type: "string" },
    published: { type: "boolean" },
    imageUrl: { type: "string" },
  },
  required: [
    "title",
    "author",
    "description",
    "ingredients",
    "instructions",
    "cuisine",
    "published",
  ],
} as const;

const messageResponse = {
  type: "object",
  properties: {
    message: { type: "string" },
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { required, ...recipePutSchema } = recipeSchema;

export const getAllSchema = {
  querystring: {
    type: "object",
    properties: {
      count: { type: "number", maximum: 100 },
    },
  },
  response: {
    200: {
      type: "array",
      items: recipeSchema,
    },
  },
};

export const getSchema = {
  params: {
    type: "object",
    properties: {
      id: { type: "string" },
    },
  },
  response: {
    200: recipeSchema,
  },
};

export const putSchema = {
  body: recipePutSchema,
  params: {
    type: "object",
    properties: {
      id: { type: "string" },
    },
  },
  response: {
    200: messageResponse,
  },
};

export const deleteSchema = {
  params: {
    type: "object",
    properties: {
      id: { type: "string" },
    },
  },
  response: {
    200: messageResponse,
  },
};

export const AddSchema = {
  body: recipeSchema,
  response: {
    201: messageResponse,
  },
};