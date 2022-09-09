import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Table Contact  */
export type Contact = {
  __typename?: 'contact';
  created_at: Scalars['timestamptz'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  /** An array relationship */
  phones: Array<Phone>;
  /** An aggregate relationship */
  phones_aggregate: Phone_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** Table Contact  */
export type ContactPhonesArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


/** Table Contact  */
export type ContactPhones_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};

/** aggregated selection of "contact" */
export type Contact_Aggregate = {
  __typename?: 'contact_aggregate';
  aggregate?: Maybe<Contact_Aggregate_Fields>;
  nodes: Array<Contact>;
};

/** aggregate fields of "contact" */
export type Contact_Aggregate_Fields = {
  __typename?: 'contact_aggregate_fields';
  avg?: Maybe<Contact_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Contact_Max_Fields>;
  min?: Maybe<Contact_Min_Fields>;
  stddev?: Maybe<Contact_Stddev_Fields>;
  stddev_pop?: Maybe<Contact_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contact_Stddev_Samp_Fields>;
  sum?: Maybe<Contact_Sum_Fields>;
  var_pop?: Maybe<Contact_Var_Pop_Fields>;
  var_samp?: Maybe<Contact_Var_Samp_Fields>;
  variance?: Maybe<Contact_Variance_Fields>;
};


/** aggregate fields of "contact" */
export type Contact_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contact_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Contact_Avg_Fields = {
  __typename?: 'contact_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "contact". All fields are combined with a logical 'AND'. */
export type Contact_Bool_Exp = {
  _and?: InputMaybe<Array<Contact_Bool_Exp>>;
  _not?: InputMaybe<Contact_Bool_Exp>;
  _or?: InputMaybe<Array<Contact_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  phones?: InputMaybe<Phone_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact" */
export enum Contact_Constraint {
  /** unique or primary key constraint */
  ContactPkey = 'contact_pkey'
}

/** input type for incrementing numeric columns in table "contact" */
export type Contact_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "contact" */
export type Contact_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  phones?: InputMaybe<Phone_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Contact_Max_Fields = {
  __typename?: 'contact_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Contact_Min_Fields = {
  __typename?: 'contact_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "contact" */
export type Contact_Mutation_Response = {
  __typename?: 'contact_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Contact>;
};

/** input type for inserting object relation for remote table "contact" */
export type Contact_Obj_Rel_Insert_Input = {
  data: Contact_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};

/** on_conflict condition type for table "contact" */
export type Contact_On_Conflict = {
  constraint: Contact_Constraint;
  update_columns?: Array<Contact_Update_Column>;
  where?: InputMaybe<Contact_Bool_Exp>;
};

/** Ordering options when selecting data from "contact". */
export type Contact_Order_By = {
  created_at?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  phones_aggregate?: InputMaybe<Phone_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contact */
export type Contact_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "contact" */
export enum Contact_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "contact" */
export type Contact_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Contact_Stddev_Fields = {
  __typename?: 'contact_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Contact_Stddev_Pop_Fields = {
  __typename?: 'contact_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Contact_Stddev_Samp_Fields = {
  __typename?: 'contact_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Contact_Sum_Fields = {
  __typename?: 'contact_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "contact" */
export enum Contact_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Contact_Var_Pop_Fields = {
  __typename?: 'contact_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Contact_Var_Samp_Fields = {
  __typename?: 'contact_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Contact_Variance_Fields = {
  __typename?: 'contact_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "contact" */
  delete_contact?: Maybe<Contact_Mutation_Response>;
  /** delete single row from the table: "contact" */
  delete_contact_by_pk?: Maybe<Contact>;
  /** delete data from the table: "phone" */
  delete_phone?: Maybe<Phone_Mutation_Response>;
  /** delete single row from the table: "phone" */
  delete_phone_by_pk?: Maybe<Phone>;
  /** delete data from the table: "playground.brands" */
  delete_playground_brands?: Maybe<Playground_Brands_Mutation_Response>;
  /** delete single row from the table: "playground.brands" */
  delete_playground_brands_by_pk?: Maybe<Playground_Brands>;
  /** insert data into the table: "contact" */
  insert_contact?: Maybe<Contact_Mutation_Response>;
  /** insert a single row into the table: "contact" */
  insert_contact_one?: Maybe<Contact>;
  /** insert data into the table: "phone" */
  insert_phone?: Maybe<Phone_Mutation_Response>;
  /** insert a single row into the table: "phone" */
  insert_phone_one?: Maybe<Phone>;
  /** insert data into the table: "playground.brands" */
  insert_playground_brands?: Maybe<Playground_Brands_Mutation_Response>;
  /** insert a single row into the table: "playground.brands" */
  insert_playground_brands_one?: Maybe<Playground_Brands>;
  /** update data of the table: "contact" */
  update_contact?: Maybe<Contact_Mutation_Response>;
  /** update single row of the table: "contact" */
  update_contact_by_pk?: Maybe<Contact>;
  /** update data of the table: "phone" */
  update_phone?: Maybe<Phone_Mutation_Response>;
  /** update single row of the table: "phone" */
  update_phone_by_pk?: Maybe<Phone>;
  /** update data of the table: "playground.brands" */
  update_playground_brands?: Maybe<Playground_Brands_Mutation_Response>;
  /** update single row of the table: "playground.brands" */
  update_playground_brands_by_pk?: Maybe<Playground_Brands>;
};


/** mutation root */
export type Mutation_RootDelete_ContactArgs = {
  where: Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PhoneArgs = {
  where: Phone_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Phone_By_PkArgs = {
  contact_id: Scalars['Int'];
  number: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Playground_BrandsArgs = {
  where: Playground_Brands_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Playground_Brands_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ContactArgs = {
  objects: Array<Contact_Insert_Input>;
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_OneArgs = {
  object: Contact_Insert_Input;
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PhoneArgs = {
  objects: Array<Phone_Insert_Input>;
  on_conflict?: InputMaybe<Phone_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Phone_OneArgs = {
  object: Phone_Insert_Input;
  on_conflict?: InputMaybe<Phone_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Playground_BrandsArgs = {
  objects: Array<Playground_Brands_Insert_Input>;
  on_conflict?: InputMaybe<Playground_Brands_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Playground_Brands_OneArgs = {
  object: Playground_Brands_Insert_Input;
  on_conflict?: InputMaybe<Playground_Brands_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ContactArgs = {
  _inc?: InputMaybe<Contact_Inc_Input>;
  _set?: InputMaybe<Contact_Set_Input>;
  where: Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_By_PkArgs = {
  _inc?: InputMaybe<Contact_Inc_Input>;
  _set?: InputMaybe<Contact_Set_Input>;
  pk_columns: Contact_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PhoneArgs = {
  _inc?: InputMaybe<Phone_Inc_Input>;
  _set?: InputMaybe<Phone_Set_Input>;
  where: Phone_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Phone_By_PkArgs = {
  _inc?: InputMaybe<Phone_Inc_Input>;
  _set?: InputMaybe<Phone_Set_Input>;
  pk_columns: Phone_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Playground_BrandsArgs = {
  _inc?: InputMaybe<Playground_Brands_Inc_Input>;
  _set?: InputMaybe<Playground_Brands_Set_Input>;
  where: Playground_Brands_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Playground_Brands_By_PkArgs = {
  _inc?: InputMaybe<Playground_Brands_Inc_Input>;
  _set?: InputMaybe<Playground_Brands_Set_Input>;
  pk_columns: Playground_Brands_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Table Phone Numbers  */
export type Phone = {
  __typename?: 'phone';
  /** An object relationship */
  contact?: Maybe<Contact>;
  contact_id: Scalars['Int'];
  created_ad?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  number: Scalars['String'];
};

/** aggregated selection of "phone" */
export type Phone_Aggregate = {
  __typename?: 'phone_aggregate';
  aggregate?: Maybe<Phone_Aggregate_Fields>;
  nodes: Array<Phone>;
};

/** aggregate fields of "phone" */
export type Phone_Aggregate_Fields = {
  __typename?: 'phone_aggregate_fields';
  avg?: Maybe<Phone_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Phone_Max_Fields>;
  min?: Maybe<Phone_Min_Fields>;
  stddev?: Maybe<Phone_Stddev_Fields>;
  stddev_pop?: Maybe<Phone_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Phone_Stddev_Samp_Fields>;
  sum?: Maybe<Phone_Sum_Fields>;
  var_pop?: Maybe<Phone_Var_Pop_Fields>;
  var_samp?: Maybe<Phone_Var_Samp_Fields>;
  variance?: Maybe<Phone_Variance_Fields>;
};


/** aggregate fields of "phone" */
export type Phone_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Phone_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "phone" */
export type Phone_Aggregate_Order_By = {
  avg?: InputMaybe<Phone_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Phone_Max_Order_By>;
  min?: InputMaybe<Phone_Min_Order_By>;
  stddev?: InputMaybe<Phone_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Phone_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Phone_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Phone_Sum_Order_By>;
  var_pop?: InputMaybe<Phone_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Phone_Var_Samp_Order_By>;
  variance?: InputMaybe<Phone_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "phone" */
export type Phone_Arr_Rel_Insert_Input = {
  data: Array<Phone_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Phone_On_Conflict>;
};

/** aggregate avg on columns */
export type Phone_Avg_Fields = {
  __typename?: 'phone_avg_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "phone" */
export type Phone_Avg_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "phone". All fields are combined with a logical 'AND'. */
export type Phone_Bool_Exp = {
  _and?: InputMaybe<Array<Phone_Bool_Exp>>;
  _not?: InputMaybe<Phone_Bool_Exp>;
  _or?: InputMaybe<Array<Phone_Bool_Exp>>;
  contact?: InputMaybe<Contact_Bool_Exp>;
  contact_id?: InputMaybe<Int_Comparison_Exp>;
  created_ad?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  number?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "phone" */
export enum Phone_Constraint {
  /** unique or primary key constraint */
  PhoneIdKey = 'phone_id_key',
  /** unique or primary key constraint */
  PhoneNumberKey = 'phone_number_key',
  /** unique or primary key constraint */
  PhonePkey = 'phone_pkey'
}

/** input type for incrementing numeric columns in table "phone" */
export type Phone_Inc_Input = {
  contact_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "phone" */
export type Phone_Insert_Input = {
  contact?: InputMaybe<Contact_Obj_Rel_Insert_Input>;
  contact_id?: InputMaybe<Scalars['Int']>;
  created_ad?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  number?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Phone_Max_Fields = {
  __typename?: 'phone_max_fields';
  contact_id?: Maybe<Scalars['Int']>;
  created_ad?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "phone" */
export type Phone_Max_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  created_ad?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Phone_Min_Fields = {
  __typename?: 'phone_min_fields';
  contact_id?: Maybe<Scalars['Int']>;
  created_ad?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "phone" */
export type Phone_Min_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  created_ad?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "phone" */
export type Phone_Mutation_Response = {
  __typename?: 'phone_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Phone>;
};

/** on_conflict condition type for table "phone" */
export type Phone_On_Conflict = {
  constraint: Phone_Constraint;
  update_columns?: Array<Phone_Update_Column>;
  where?: InputMaybe<Phone_Bool_Exp>;
};

/** Ordering options when selecting data from "phone". */
export type Phone_Order_By = {
  contact?: InputMaybe<Contact_Order_By>;
  contact_id?: InputMaybe<Order_By>;
  created_ad?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
};

/** primary key columns input for table: phone */
export type Phone_Pk_Columns_Input = {
  contact_id: Scalars['Int'];
  number: Scalars['String'];
};

/** select columns of table "phone" */
export enum Phone_Select_Column {
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  CreatedAd = 'created_ad',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number'
}

/** input type for updating data in table "phone" */
export type Phone_Set_Input = {
  contact_id?: InputMaybe<Scalars['Int']>;
  created_ad?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  number?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Phone_Stddev_Fields = {
  __typename?: 'phone_stddev_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "phone" */
export type Phone_Stddev_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Phone_Stddev_Pop_Fields = {
  __typename?: 'phone_stddev_pop_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "phone" */
export type Phone_Stddev_Pop_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Phone_Stddev_Samp_Fields = {
  __typename?: 'phone_stddev_samp_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "phone" */
export type Phone_Stddev_Samp_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Phone_Sum_Fields = {
  __typename?: 'phone_sum_fields';
  contact_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "phone" */
export type Phone_Sum_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "phone" */
export enum Phone_Update_Column {
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  CreatedAd = 'created_ad',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number'
}

/** aggregate var_pop on columns */
export type Phone_Var_Pop_Fields = {
  __typename?: 'phone_var_pop_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "phone" */
export type Phone_Var_Pop_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Phone_Var_Samp_Fields = {
  __typename?: 'phone_var_samp_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "phone" */
export type Phone_Var_Samp_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Phone_Variance_Fields = {
  __typename?: 'phone_variance_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "phone" */
export type Phone_Variance_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** a table for store brands data */
export type Playground_Brands = {
  __typename?: 'playground_brands';
  brand_name: Scalars['String'];
  brand_owner: Scalars['String'];
  id: Scalars['Int'];
};

/** aggregated selection of "playground.brands" */
export type Playground_Brands_Aggregate = {
  __typename?: 'playground_brands_aggregate';
  aggregate?: Maybe<Playground_Brands_Aggregate_Fields>;
  nodes: Array<Playground_Brands>;
};

/** aggregate fields of "playground.brands" */
export type Playground_Brands_Aggregate_Fields = {
  __typename?: 'playground_brands_aggregate_fields';
  avg?: Maybe<Playground_Brands_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Playground_Brands_Max_Fields>;
  min?: Maybe<Playground_Brands_Min_Fields>;
  stddev?: Maybe<Playground_Brands_Stddev_Fields>;
  stddev_pop?: Maybe<Playground_Brands_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Playground_Brands_Stddev_Samp_Fields>;
  sum?: Maybe<Playground_Brands_Sum_Fields>;
  var_pop?: Maybe<Playground_Brands_Var_Pop_Fields>;
  var_samp?: Maybe<Playground_Brands_Var_Samp_Fields>;
  variance?: Maybe<Playground_Brands_Variance_Fields>;
};


/** aggregate fields of "playground.brands" */
export type Playground_Brands_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Playground_Brands_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Playground_Brands_Avg_Fields = {
  __typename?: 'playground_brands_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "playground.brands". All fields are combined with a logical 'AND'. */
export type Playground_Brands_Bool_Exp = {
  _and?: InputMaybe<Array<Playground_Brands_Bool_Exp>>;
  _not?: InputMaybe<Playground_Brands_Bool_Exp>;
  _or?: InputMaybe<Array<Playground_Brands_Bool_Exp>>;
  brand_name?: InputMaybe<String_Comparison_Exp>;
  brand_owner?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "playground.brands" */
export enum Playground_Brands_Constraint {
  /** unique or primary key constraint */
  BrandsPkey = 'brands_pkey'
}

/** input type for incrementing numeric columns in table "playground.brands" */
export type Playground_Brands_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "playground.brands" */
export type Playground_Brands_Insert_Input = {
  brand_name?: InputMaybe<Scalars['String']>;
  brand_owner?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Playground_Brands_Max_Fields = {
  __typename?: 'playground_brands_max_fields';
  brand_name?: Maybe<Scalars['String']>;
  brand_owner?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Playground_Brands_Min_Fields = {
  __typename?: 'playground_brands_min_fields';
  brand_name?: Maybe<Scalars['String']>;
  brand_owner?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "playground.brands" */
export type Playground_Brands_Mutation_Response = {
  __typename?: 'playground_brands_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Playground_Brands>;
};

/** on_conflict condition type for table "playground.brands" */
export type Playground_Brands_On_Conflict = {
  constraint: Playground_Brands_Constraint;
  update_columns?: Array<Playground_Brands_Update_Column>;
  where?: InputMaybe<Playground_Brands_Bool_Exp>;
};

/** Ordering options when selecting data from "playground.brands". */
export type Playground_Brands_Order_By = {
  brand_name?: InputMaybe<Order_By>;
  brand_owner?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: playground_brands */
export type Playground_Brands_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "playground.brands" */
export enum Playground_Brands_Select_Column {
  /** column name */
  BrandName = 'brand_name',
  /** column name */
  BrandOwner = 'brand_owner',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "playground.brands" */
export type Playground_Brands_Set_Input = {
  brand_name?: InputMaybe<Scalars['String']>;
  brand_owner?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Playground_Brands_Stddev_Fields = {
  __typename?: 'playground_brands_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Playground_Brands_Stddev_Pop_Fields = {
  __typename?: 'playground_brands_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Playground_Brands_Stddev_Samp_Fields = {
  __typename?: 'playground_brands_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Playground_Brands_Sum_Fields = {
  __typename?: 'playground_brands_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "playground.brands" */
export enum Playground_Brands_Update_Column {
  /** column name */
  BrandName = 'brand_name',
  /** column name */
  BrandOwner = 'brand_owner',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Playground_Brands_Var_Pop_Fields = {
  __typename?: 'playground_brands_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Playground_Brands_Var_Samp_Fields = {
  __typename?: 'playground_brands_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Playground_Brands_Variance_Fields = {
  __typename?: 'playground_brands_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "phone" */
  phone: Array<Phone>;
  /** fetch aggregated fields from the table: "phone" */
  phone_aggregate: Phone_Aggregate;
  /** fetch data from the table: "phone" using primary key columns */
  phone_by_pk?: Maybe<Phone>;
  /** fetch data from the table: "playground.brands" */
  playground_brands: Array<Playground_Brands>;
  /** fetch aggregated fields from the table: "playground.brands" */
  playground_brands_aggregate: Playground_Brands_Aggregate;
  /** fetch data from the table: "playground.brands" using primary key columns */
  playground_brands_by_pk?: Maybe<Playground_Brands>;
};


export type Query_RootContactArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Query_RootContact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Query_RootContact_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPhoneArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Query_RootPhone_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Query_RootPhone_By_PkArgs = {
  contact_id: Scalars['Int'];
  number: Scalars['String'];
};


export type Query_RootPlayground_BrandsArgs = {
  distinct_on?: InputMaybe<Array<Playground_Brands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Playground_Brands_Order_By>>;
  where?: InputMaybe<Playground_Brands_Bool_Exp>;
};


export type Query_RootPlayground_Brands_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Playground_Brands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Playground_Brands_Order_By>>;
  where?: InputMaybe<Playground_Brands_Bool_Exp>;
};


export type Query_RootPlayground_Brands_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "phone" */
  phone: Array<Phone>;
  /** fetch aggregated fields from the table: "phone" */
  phone_aggregate: Phone_Aggregate;
  /** fetch data from the table: "phone" using primary key columns */
  phone_by_pk?: Maybe<Phone>;
  /** fetch data from the table: "playground.brands" */
  playground_brands: Array<Playground_Brands>;
  /** fetch aggregated fields from the table: "playground.brands" */
  playground_brands_aggregate: Playground_Brands_Aggregate;
  /** fetch data from the table: "playground.brands" using primary key columns */
  playground_brands_by_pk?: Maybe<Playground_Brands>;
};


export type Subscription_RootContactArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Subscription_RootContact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Subscription_RootContact_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPhoneArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Subscription_RootPhone_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Subscription_RootPhone_By_PkArgs = {
  contact_id: Scalars['Int'];
  number: Scalars['String'];
};


export type Subscription_RootPlayground_BrandsArgs = {
  distinct_on?: InputMaybe<Array<Playground_Brands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Playground_Brands_Order_By>>;
  where?: InputMaybe<Playground_Brands_Bool_Exp>;
};


export type Subscription_RootPlayground_Brands_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Playground_Brands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Playground_Brands_Order_By>>;
  where?: InputMaybe<Playground_Brands_Bool_Exp>;
};


export type Subscription_RootPlayground_Brands_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type ContactNumberFragment = { __typename?: 'contact', created_at: any, first_name: string, id: number, last_name: string, phones: Array<{ __typename?: 'phone', id: number, number: string }> };

export type GetContactListQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Contact_Select_Column> | Contact_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By> | Contact_Order_By>;
  where?: InputMaybe<Contact_Bool_Exp>;
}>;


export type GetContactListQuery = { __typename?: 'query_root', contact: Array<{ __typename?: 'contact', created_at: any, first_name: string, id: number, last_name: string, phones: Array<{ __typename?: 'phone', id: number, number: string }> }> };

export type GetContactDetailQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetContactDetailQuery = { __typename?: 'query_root', contact_by_pk?: { __typename?: 'contact', last_name: string, id: number, first_name: string, created_at: any, phones: Array<{ __typename?: 'phone', number: string }> } | null };

export type AddContactWithPhonesMutationVariables = Exact<{
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  phones: Array<Phone_Insert_Input> | Phone_Insert_Input;
}>;


export type AddContactWithPhonesMutation = { __typename?: 'mutation_root', insert_contact?: { __typename?: 'contact_mutation_response', returning: Array<{ __typename?: 'contact', first_name: string, last_name: string, id: number, phones: Array<{ __typename?: 'phone', number: string }> }> } | null };

export type AddNumberToContactMutationVariables = Exact<{
  contact_id: Scalars['Int'];
  phone_number: Scalars['String'];
}>;


export type AddNumberToContactMutation = { __typename?: 'mutation_root', insert_phone?: { __typename?: 'phone_mutation_response', returning: Array<{ __typename?: 'phone', contact?: { __typename?: 'contact', id: number, last_name: string, first_name: string, phones: Array<{ __typename?: 'phone', number: string }> } | null }> } | null };

export type DeleteContactMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteContactMutation = { __typename?: 'mutation_root', delete_contact_by_pk?: { __typename?: 'contact', first_name: string, last_name: string, id: number } | null };

export type DeletePhoneMutationVariables = Exact<{
  id: Scalars['Int'];
  number: Scalars['String'];
}>;


export type DeletePhoneMutation = { __typename?: 'mutation_root', delete_phone_by_pk?: { __typename?: 'phone', id: number } | null };

export type EditContactByIdMutationVariables = Exact<{
  id: Scalars['Int'];
  _set?: InputMaybe<Contact_Set_Input>;
}>;


export type EditContactByIdMutation = { __typename?: 'mutation_root', update_contact_by_pk?: { __typename?: 'contact', id: number, first_name: string, last_name: string, phones: Array<{ __typename?: 'phone', number: string }> } | null };

export type GetTotalCountQueryVariables = Exact<{
  where?: InputMaybe<Contact_Bool_Exp>;
}>;


export type GetTotalCountQuery = { __typename?: 'query_root', contact_aggregate: { __typename?: 'contact_aggregate', aggregate?: { __typename?: 'contact_aggregate_fields', count: number } | null } };

export const ContactNumberFragmentDoc = gql`
    fragment ContactNumber on contact {
  created_at
  first_name
  id
  last_name
  phones {
    id
    number
  }
}
    `;
export const GetContactListDocument = gql`
    query GetContactList($distinct_on: [contact_select_column!], $limit: Int, $offset: Int, $order_by: [contact_order_by!], $where: contact_bool_exp) {
  contact(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...ContactNumber
  }
}
    ${ContactNumberFragmentDoc}`;

/**
 * __useGetContactListQuery__
 *
 * To run a query within a React component, call `useGetContactListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactListQuery({
 *   variables: {
 *      distinct_on: // value for 'distinct_on'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetContactListQuery(baseOptions?: Apollo.QueryHookOptions<GetContactListQuery, GetContactListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactListQuery, GetContactListQueryVariables>(GetContactListDocument, options);
      }
export function useGetContactListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactListQuery, GetContactListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactListQuery, GetContactListQueryVariables>(GetContactListDocument, options);
        }
export type GetContactListQueryHookResult = ReturnType<typeof useGetContactListQuery>;
export type GetContactListLazyQueryHookResult = ReturnType<typeof useGetContactListLazyQuery>;
export type GetContactListQueryResult = Apollo.QueryResult<GetContactListQuery, GetContactListQueryVariables>;
export const GetContactDetailDocument = gql`
    query GetContactDetail($id: Int!) {
  contact_by_pk(id: $id) {
    last_name
    id
    first_name
    created_at
    phones {
      number
    }
  }
}
    `;

/**
 * __useGetContactDetailQuery__
 *
 * To run a query within a React component, call `useGetContactDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetContactDetailQuery(baseOptions: Apollo.QueryHookOptions<GetContactDetailQuery, GetContactDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactDetailQuery, GetContactDetailQueryVariables>(GetContactDetailDocument, options);
      }
export function useGetContactDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactDetailQuery, GetContactDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactDetailQuery, GetContactDetailQueryVariables>(GetContactDetailDocument, options);
        }
export type GetContactDetailQueryHookResult = ReturnType<typeof useGetContactDetailQuery>;
export type GetContactDetailLazyQueryHookResult = ReturnType<typeof useGetContactDetailLazyQuery>;
export type GetContactDetailQueryResult = Apollo.QueryResult<GetContactDetailQuery, GetContactDetailQueryVariables>;
export const AddContactWithPhonesDocument = gql`
    mutation AddContactWithPhones($first_name: String!, $last_name: String!, $phones: [phone_insert_input!]!) {
  insert_contact(
    objects: {first_name: $first_name, last_name: $last_name, phones: {data: $phones}}
  ) {
    returning {
      first_name
      last_name
      id
      phones {
        number
      }
    }
  }
}
    `;
export type AddContactWithPhonesMutationFn = Apollo.MutationFunction<AddContactWithPhonesMutation, AddContactWithPhonesMutationVariables>;

/**
 * __useAddContactWithPhonesMutation__
 *
 * To run a mutation, you first call `useAddContactWithPhonesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddContactWithPhonesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addContactWithPhonesMutation, { data, loading, error }] = useAddContactWithPhonesMutation({
 *   variables: {
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      phones: // value for 'phones'
 *   },
 * });
 */
export function useAddContactWithPhonesMutation(baseOptions?: Apollo.MutationHookOptions<AddContactWithPhonesMutation, AddContactWithPhonesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddContactWithPhonesMutation, AddContactWithPhonesMutationVariables>(AddContactWithPhonesDocument, options);
      }
export type AddContactWithPhonesMutationHookResult = ReturnType<typeof useAddContactWithPhonesMutation>;
export type AddContactWithPhonesMutationResult = Apollo.MutationResult<AddContactWithPhonesMutation>;
export type AddContactWithPhonesMutationOptions = Apollo.BaseMutationOptions<AddContactWithPhonesMutation, AddContactWithPhonesMutationVariables>;
export const AddNumberToContactDocument = gql`
    mutation AddNumberToContact($contact_id: Int!, $phone_number: String!) {
  insert_phone(objects: {contact_id: $contact_id, number: $phone_number}) {
    returning {
      contact {
        id
        last_name
        first_name
        phones {
          number
        }
      }
    }
  }
}
    `;
export type AddNumberToContactMutationFn = Apollo.MutationFunction<AddNumberToContactMutation, AddNumberToContactMutationVariables>;

/**
 * __useAddNumberToContactMutation__
 *
 * To run a mutation, you first call `useAddNumberToContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNumberToContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNumberToContactMutation, { data, loading, error }] = useAddNumberToContactMutation({
 *   variables: {
 *      contact_id: // value for 'contact_id'
 *      phone_number: // value for 'phone_number'
 *   },
 * });
 */
export function useAddNumberToContactMutation(baseOptions?: Apollo.MutationHookOptions<AddNumberToContactMutation, AddNumberToContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNumberToContactMutation, AddNumberToContactMutationVariables>(AddNumberToContactDocument, options);
      }
export type AddNumberToContactMutationHookResult = ReturnType<typeof useAddNumberToContactMutation>;
export type AddNumberToContactMutationResult = Apollo.MutationResult<AddNumberToContactMutation>;
export type AddNumberToContactMutationOptions = Apollo.BaseMutationOptions<AddNumberToContactMutation, AddNumberToContactMutationVariables>;
export const DeleteContactDocument = gql`
    mutation DeleteContact($id: Int!) {
  delete_contact_by_pk(id: $id) {
    first_name
    last_name
    id
  }
}
    `;
export type DeleteContactMutationFn = Apollo.MutationFunction<DeleteContactMutation, DeleteContactMutationVariables>;

/**
 * __useDeleteContactMutation__
 *
 * To run a mutation, you first call `useDeleteContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContactMutation, { data, loading, error }] = useDeleteContactMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteContactMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContactMutation, DeleteContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteContactMutation, DeleteContactMutationVariables>(DeleteContactDocument, options);
      }
export type DeleteContactMutationHookResult = ReturnType<typeof useDeleteContactMutation>;
export type DeleteContactMutationResult = Apollo.MutationResult<DeleteContactMutation>;
export type DeleteContactMutationOptions = Apollo.BaseMutationOptions<DeleteContactMutation, DeleteContactMutationVariables>;
export const DeletePhoneDocument = gql`
    mutation DeletePhone($id: Int!, $number: String!) {
  delete_phone_by_pk(contact_id: $id, number: $number) {
    id
  }
}
    `;
export type DeletePhoneMutationFn = Apollo.MutationFunction<DeletePhoneMutation, DeletePhoneMutationVariables>;

/**
 * __useDeletePhoneMutation__
 *
 * To run a mutation, you first call `useDeletePhoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePhoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePhoneMutation, { data, loading, error }] = useDeletePhoneMutation({
 *   variables: {
 *      id: // value for 'id'
 *      number: // value for 'number'
 *   },
 * });
 */
export function useDeletePhoneMutation(baseOptions?: Apollo.MutationHookOptions<DeletePhoneMutation, DeletePhoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePhoneMutation, DeletePhoneMutationVariables>(DeletePhoneDocument, options);
      }
export type DeletePhoneMutationHookResult = ReturnType<typeof useDeletePhoneMutation>;
export type DeletePhoneMutationResult = Apollo.MutationResult<DeletePhoneMutation>;
export type DeletePhoneMutationOptions = Apollo.BaseMutationOptions<DeletePhoneMutation, DeletePhoneMutationVariables>;
export const EditContactByIdDocument = gql`
    mutation EditContactById($id: Int!, $_set: contact_set_input) {
  update_contact_by_pk(pk_columns: {id: $id}, _set: $_set) {
    id
    first_name
    last_name
    phones {
      number
    }
  }
}
    `;
export type EditContactByIdMutationFn = Apollo.MutationFunction<EditContactByIdMutation, EditContactByIdMutationVariables>;

/**
 * __useEditContactByIdMutation__
 *
 * To run a mutation, you first call `useEditContactByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditContactByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editContactByIdMutation, { data, loading, error }] = useEditContactByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      _set: // value for '_set'
 *   },
 * });
 */
export function useEditContactByIdMutation(baseOptions?: Apollo.MutationHookOptions<EditContactByIdMutation, EditContactByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditContactByIdMutation, EditContactByIdMutationVariables>(EditContactByIdDocument, options);
      }
export type EditContactByIdMutationHookResult = ReturnType<typeof useEditContactByIdMutation>;
export type EditContactByIdMutationResult = Apollo.MutationResult<EditContactByIdMutation>;
export type EditContactByIdMutationOptions = Apollo.BaseMutationOptions<EditContactByIdMutation, EditContactByIdMutationVariables>;
export const GetTotalCountDocument = gql`
    query GetTotalCount($where: contact_bool_exp) {
  contact_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetTotalCountQuery__
 *
 * To run a query within a React component, call `useGetTotalCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetTotalCountQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalCountQuery, GetTotalCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalCountQuery, GetTotalCountQueryVariables>(GetTotalCountDocument, options);
      }
export function useGetTotalCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalCountQuery, GetTotalCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalCountQuery, GetTotalCountQueryVariables>(GetTotalCountDocument, options);
        }
export type GetTotalCountQueryHookResult = ReturnType<typeof useGetTotalCountQuery>;
export type GetTotalCountLazyQueryHookResult = ReturnType<typeof useGetTotalCountLazyQuery>;
export type GetTotalCountQueryResult = Apollo.QueryResult<GetTotalCountQuery, GetTotalCountQueryVariables>;