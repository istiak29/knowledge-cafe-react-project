import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
      <div
        className="flex justify-between items-center py-4 border-b-2 max-w-7xl mx-auto"
      >
        <h3 className="text-4xl font-bold">Knowledge Cafe</h3>
        <img src={profile} alt="Profile" />
      </div>
    );
};

export default Header;