const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-3xl gradient-border boder border-solid bg-[linear-gradient(103.4deg,_#041D1C_16.66%,_#0C2319_81.61%)] shadow-input flex justify-center space-x-2 md:space-x-4 px-4 md:px-8 py-3 md:py-6 "
    >
      {children}
    </nav>
  );
};

export default Menu;
