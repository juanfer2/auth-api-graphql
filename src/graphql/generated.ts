import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  JSONObject: any;
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MessageResponse = {
  __typename?: 'MessageResponse';
  status: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  createProject?: Maybe<Project>;
  createQueryScript?: Maybe<QueryScript>;
  createRequest?: Maybe<Request>;
  healt?: Maybe<MessageResponse>;
  register?: Maybe<User>;
  updateProject?: Maybe<Project>;
  updateQueryScript?: Maybe<QueryScript>;
};


export type MutationCreateProjectArgs = {
  ProjectInput?: Maybe<ProjectInput>;
};


export type MutationCreateQueryScriptArgs = {
  QueryScript?: Maybe<QueryScriptInput>;
};


export type MutationCreateRequestArgs = {
  RequestInput?: Maybe<RequestInput>;
};


export type MutationRegisterArgs = {
  userInput?: Maybe<UserInput>;
};


export type MutationUpdateProjectArgs = {
  ID: Scalars['ID'];
  ProjectInput?: Maybe<ProjectInput>;
};


export type MutationUpdateQueryScriptArgs = {
  ID: Scalars['Int'];
  QueryScriptUpdateInput?: Maybe<QueryScriptUpdateInput>;
};

export type Project = {
  __typename?: 'Project';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ProjectInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  healt?: Maybe<MessageResponse>;
  login?: Maybe<User>;
  me?: Maybe<User>;
  projectById?: Maybe<Project>;
  projects?: Maybe<Array<Maybe<Project>>>;
  queryScripts?: Maybe<Array<Maybe<QueryScript>>>;
};


export type QueryLoginArgs = {
  loginInput?: Maybe<LoginInput>;
};


export type QueryProjectByIdArgs = {
  ID: Scalars['Int'];
};

export type QueryScript = {
  __typename?: 'QueryScript';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  scripts?: Maybe<Array<Maybe<Script>>>;
  title?: Maybe<Scalars['String']>;
};

export type QueryScriptInput = {
  description?: Maybe<Scalars['String']>;
  projectId: Scalars['ID'];
  scripts?: Maybe<Array<Maybe<ScriptInput>>>;
  title?: Maybe<Scalars['String']>;
};

export type QueryScriptUpdateInput = {
  description?: Maybe<Scalars['String']>;
  projectId: Scalars['ID'];
  scripts?: Maybe<Array<Maybe<ScriptUpdateInput>>>;
  title?: Maybe<Scalars['String']>;
};

export type Request = {
  __typename?: 'Request';
  body?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  method?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RequestInput = {
  body?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  projectId: Scalars['ID'];
  title: Scalars['String'];
  type?: Maybe<TypeRequests>;
  url?: Maybe<Scalars['String']>;
};

export type Script = {
  __typename?: 'Script';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query?: Maybe<QueryScript>;
  queryId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ScriptInput = {
  content: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ScriptUpdateInput = {
  content: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export enum TypeRequests {
  Grahpql = 'GRAHPQL',
  Rest = 'REST'
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserInput = {
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  LoginInput: LoginInput;
  MessageResponse: ResolverTypeWrapper<MessageResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Project: ResolverTypeWrapper<Project>;
  ProjectInput: ProjectInput;
  Query: ResolverTypeWrapper<{}>;
  QueryScript: ResolverTypeWrapper<QueryScript>;
  QueryScriptInput: QueryScriptInput;
  QueryScriptUpdateInput: QueryScriptUpdateInput;
  Request: ResolverTypeWrapper<Request>;
  RequestInput: RequestInput;
  Script: ResolverTypeWrapper<Script>;
  ScriptInput: ScriptInput;
  ScriptUpdateInput: ScriptUpdateInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  TypeRequests: TypeRequests;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  LoginInput: LoginInput;
  MessageResponse: MessageResponse;
  Mutation: {};
  Project: Project;
  ProjectInput: ProjectInput;
  Query: {};
  QueryScript: QueryScript;
  QueryScriptInput: QueryScriptInput;
  QueryScriptUpdateInput: QueryScriptUpdateInput;
  Request: Request;
  RequestInput: RequestInput;
  Script: Script;
  ScriptInput: ScriptInput;
  ScriptUpdateInput: ScriptUpdateInput;
  String: Scalars['String'];
  User: User;
  UserInput: UserInput;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MessageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageResponse'] = ResolversParentTypes['MessageResponse']> = {
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationCreateProjectArgs, never>>;
  createQueryScript?: Resolver<Maybe<ResolversTypes['QueryScript']>, ParentType, ContextType, RequireFields<MutationCreateQueryScriptArgs, never>>;
  createRequest?: Resolver<Maybe<ResolversTypes['Request']>, ParentType, ContextType, RequireFields<MutationCreateRequestArgs, never>>;
  healt?: Resolver<Maybe<ResolversTypes['MessageResponse']>, ParentType, ContextType>;
  register?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, never>>;
  updateProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationUpdateProjectArgs, 'ID'>>;
  updateQueryScript?: Resolver<Maybe<ResolversTypes['QueryScript']>, ParentType, ContextType, RequireFields<MutationUpdateQueryScriptArgs, 'ID'>>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  healt?: Resolver<Maybe<ResolversTypes['MessageResponse']>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryLoginArgs, never>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  projectById?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectByIdArgs, 'ID'>>;
  projects?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType>;
  queryScripts?: Resolver<Maybe<Array<Maybe<ResolversTypes['QueryScript']>>>, ParentType, ContextType>;
};

export type QueryScriptResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryScript'] = ResolversParentTypes['QueryScript']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  scripts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Script']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['Request'] = ResolversParentTypes['Request']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScriptResolvers<ContextType = any, ParentType extends ResolversParentTypes['Script'] = ResolversParentTypes['Script']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['QueryScript']>, ParentType, ContextType>;
  queryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  MessageResponse?: MessageResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QueryScript?: QueryScriptResolvers<ContextType>;
  Request?: RequestResolvers<ContextType>;
  Script?: ScriptResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

