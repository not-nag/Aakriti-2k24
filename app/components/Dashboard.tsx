export default function Dashboard({ userData }) {
  const avatarSrc =
    userData.gender === "Male" ? "/avatar-male.webp" : "/avatar-female.webp";

  return (
    <div className="border-4 border-black rounded-md">
      <div className="border-b-4 border-black ">
        <img src={avatarSrc} alt="Avatar"></img>
      </div>
      <div className="p-4 text-lg font-medium">
        <p>▣ {userData.name}</p>
        <p>▣ {userData.email}</p>
        <p>▣ +91 {userData.mobile}</p>
        <p>▣ {userData.gender}</p>
        <p>▣ {userData.usn}</p>
        <p>▣ {userData.college}</p>
        <p>▣ {userData.degree}</p>
        <p>▣ {userData.branch}</p>
        <p>▣ {userData.address}</p>
      </div>
    </div>
  );
}
