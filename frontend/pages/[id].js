import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserDetails() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`http://127.0.0.1:5000/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <section class="text-gray-600 body-font bg-gray-800 h-screen">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/account.png"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">
              {user.name}
            </h1>
            <p class="leading-relaxed text-gray-500">{user.email}</p>
            <p class="leading-relaxed text-gray-500">{user.role}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
