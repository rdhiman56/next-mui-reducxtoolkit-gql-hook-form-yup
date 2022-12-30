import Page from "../components/Page";
import { addUser } from "../store/userSlice";
import { wrapper } from "../store/store";
import { increment } from "../store/counterslice";

const Other = (props) => {
  return <Page title="Other Page" linkTo="/" />;
};

//wrapper.getServerSideProps(store) by using this we can have the acces of store inside getServerSideProps
export const getServerSideProps = wrapper.getServerSideProps(
  (store = async () => {
    // id passing every time this fn calls
    const response = await fetch(
      `https://reqres.in/api/users${Math.floor(Math.random() * 10 + 1)}`
    );
    const { data } = await response.json();
    store.dispatch(addUser(`${data.first_name} ${data.last_name}`));
    store.dispatch(increment());
  }) 
);


export default Other;
