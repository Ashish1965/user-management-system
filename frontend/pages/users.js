import Link from "next/link";
import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      <section class="text-gray-600 body-font bg-gray-800 h-screen">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-center mb-10 text-gray-500">
            User List
          </h1>
          <div class="flex flex-wrap -m-4">
            {users.map((user) => (
              <div class="xl:w-1/3 md:w-1/2 p-4" key={user.id}>
              <Link href={`/${user.id}`}>
                <div class="border border-gray-700 p-6 rounded-lg hover:scale-105 active:scale-95 duration-300 hover:bg-gray-700">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-lg text-gray-300 font-medium title-font mb-2">
                    {user.name}
                  </h2>
                  <p class="leading-relaxed text-base text-gray-500">
                    {user.email}
                  </p>
                  <p class="leading-relaxed text-base text-gray-500">
                    {user.role}
                  </p>
                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
