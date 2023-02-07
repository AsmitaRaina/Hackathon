import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme.js";
// import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";



const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (

    <>


      <h1 class="m-10 text-5xl font-extrabold leading-none tracking-tight text-white">Interested Candidates In <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Google</span></h1>


      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Students Name
              </th>
              <th scope="col" class="px-6 py-3">
                CPI
              </th>
              <th scope="col" class="px-6 py-3">
                Branch
              </th>
              <th scope="col" class="px-6 py-3">
                Accept / Decline
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Student 1
              </th>
              <td class="px-6 py-4">
                8
              </td>
              <td class="px-6 py-4">
                IT
              </td>
              <td class="px-6 py-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Student 2
              </th>
              <td class="px-6 py-4">
                7
              </td>
              <td class="px-6 py-4">
                CS
              </td>
              <td class="px-6 py-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Student 3
              </th>
              <td class="px-6 py-4">
                8.5
              </td>
              <td class="px-6 py-4">
                EXTC
              </td>
              <td class="px-6 py-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Student 1
              </th>
              <td class="px-6 py-4">
                8
              </td>
              <td class="px-6 py-4">
                IT
              </td>
              <td class="px-6 py-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Student 1
              </th>
              <td class="px-6 py-4">
                8
              </td>
              <td class="px-6 py-4">
                IT
              </td>
              <td class="px-6 py-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Student 1
              </th>
              <td class="px-6 py-4">
                8
              </td>
              <td class="px-6 py-4">
                IT
              </td>
              <td class="px-6 py-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Student 1
              </th>
              <td class="px-6 py-4">
                8
              </td>
              <td class="px-6 py-4">
                IT
              </td>
              <td class="px-6 py-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Student 1
              </th>
              <td class="px-6 py-4">
                8
              </td>
              <td class="px-6 py-4">
                IT
              </td>
              <td class="px-6 py-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Student 1
              </th>
              <td class="px-6 py-4">
                8
              </td>
              <td class="px-6 py-4">
                IT
              </td>
              <td class="px-6 py-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Student 1
              </th>
              <td class="px-6 py-4">
                8
              </td>
              <td class="px-6 py-4">
                IT
              </td>
              <td class="px-6 py-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" class="focus:outline-none right-10 bottom-10 fixed text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={()=>alert("Students Selected")}>Submit</button>

    </>

  );
};

export default Dashboard;
