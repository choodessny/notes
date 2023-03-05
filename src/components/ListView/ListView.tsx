import { List } from "../List/List";
import { Header } from "../Header/Header";
import { CommonHeaderElements } from "../CommonHeaderElements/CommonHeaderElements";

export const ListView = () => {
  return (
    <>
      <Header>
        <CommonHeaderElements />
      </Header>
      <List />
    </>
  );
};
