import react from "react";


function Search() {
  return (
    <>
      <div className="flex justify-center items-center p-4 text-white grid gap-4 col-span-6" >
        <form class="flex justify-center items-center p-4 bg-white text-gray gap-6 border border-gray-300 rounded-lg w-auto h-auto">
        <div>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pe-3 pointer-events-none text-black font-light ">
            What
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-[72px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ex: food, service, barber, hotel.."
            required
          />
        </div>
      </div>    <div>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pe-3 pointer-events-none text-black font-light  ">
            Where
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-[72px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your City...."
            required
          />
        </div>
      </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Search;
