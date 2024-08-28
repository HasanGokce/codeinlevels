import { useLocation } from "@docusaurus/router";

export default function Button() {
  const location = useLocation();
  const pathname = location.pathname;
  const lastPath = pathname.substring(pathname.lastIndexOf("/") + 1);

  console.log(pathname);
  const buttons = [
    {
      name: "Level 1",
      path: "level-1",
    },
    {
      name: "Level 2",
      path: "level-2",
    },
    {
      name: "Level 3",
      path: "level-3",
    },
  ];

  const renderButtons = () => {
    return buttons.map((button) => {
      return (
        <a
          href={`./${button.path}`}
          key={button.path}
          style={{ color: "#fff" }}
        >
          <div
            className={
              lastPath === button.path
                ? "levelButton levelButtonSelected"
                : "levelButton"
            }
            key={button.path}
          >
            {button.name}
          </div>
        </a>
      );
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "1.25rem",
      }}
    >
      {renderButtons()}
    </div>
  );
}
