import { gql } from '@apollo/client'

const CONTACT_FRAGMENT=gql`
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
`
const GET_CONTACTS = gql`
  ${CONTACT_FRAGMENT}
  query GetContactList (
    $distinct_on: [contact_select_column!], 
    $limit: Int, 
    $offset: Int, 
    $order_by: [contact_order_by!], 
    $where: contact_bool_exp
  ) {
  contact(
      distinct_on: $distinct_on, 
      limit: $limit, 
      offset: $offset, 
      order_by: $order_by, 
      where: $where
  ){
    ...ContactNumber
  }
}`

const GET_CONTACT = gql`
query GetContactDetail($id: Int!){
  contact_by_pk(id: $id) {
  last_name
  id
  first_name
  created_at
  phones {
    number,
  }
}
}`

const ADD_CONTACT = gql`
mutation AddContactWithPhones(
  $first_name: String!, 
  $last_name: String!, 
  $phones: [phone_insert_input!]!
  ) {
insert_contact(
    objects: {
        first_name: $first_name, 
        last_name: 
        $last_name, phones: { 
            data: $phones
          }
      }
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

const ADD_PHONE_TO_CONTACT = gql`
mutation AddNumberToContact ($contact_id: Int!, $phone_number:String!) {
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
const DELETE_CONTACT = gql`
mutation DeleteContact($id: Int!) {
  delete_contact_by_pk(id: $id) {
    first_name
    last_name
    id
  }
}
`;
const DELETE_PHONE = gql`
mutation DeletePhone($id: Int!, $number: String!) {
  delete_phone_by_pk(contact_id: $id, number: $number) {
    id
  }
}
`;

const EDIT_CONTACT = gql`
mutation EditContactById($id: Int!, $_set: contact_set_input) {
  update_contact_by_pk(pk_columns: {id: $id}, _set: $_set) {
    id
    first_name
    last_name
    
    phones {
      number
    }
  }
}`

const ADD_PHONE = gql`
mutation EditContactById($id: Int!, $_set: contact_set_input) {
  update_contact_by_pk(pk_columns: {id: $id}, _set: $_set) {
    id
    first_name
    last_name
    phones {
      number
    }
  }
}`




const GET_TOTAL_COUNT = gql`
  query GetTotalCount(
    $where: contact_bool_exp
  ){
    contact_aggregate(
      where: $where
    ){
      aggregate{
        count
      }
    }
  }`

