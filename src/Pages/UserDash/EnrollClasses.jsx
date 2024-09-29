import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const EnrollClasses = () => {
  const { user } = useAuth();
  const email = user.email;
  const axiosSecure = useAxiosSecure();

  const { data: enroll = [] } = useQuery({
    queryKey: ["enrollClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enroll/${email}`);
      return res.data;
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
      {enroll.map((item) => (
        <div key={item._id}>
            <div className="border border-gray-700 p-4 rounded hover:bg-gray-600 hover:text-white">
                <img className="w-64" src={item.image} alt="" />
                <p className="mt-2"><span className="font-medium">Title : </span>{item.title}</p>
                <p><span className="font-medium">Post : </span>{item.name}</p>
                <Link item={item.classId} to={`/dashboard/my-enroll-class-details/${item._id}`}><button className="btn btn-ghost btn-sm mt-1 bg-[#e67e22] text-white hover:text-black">Continue</button></Link>
            </div>
        </div>
      ))}
    </div>
  );
};

export default EnrollClasses;
