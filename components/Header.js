import Router from "next/router";

const Header = (props) => {
  return (
    <header className="container mx-auto mt-4 flex p-4 items-center">
      {props.back && (
        <div className="cursor-pointer " onClick={() => Router.back()}>
          <img src="/images/Backward arrow.svg" alt="" />
        </div>
      )}
      <div className="mx-auto">
        <img src="/images/Logo-small.svg" alt="" />
      </div>
    </header>
  );
};

export default Header;
