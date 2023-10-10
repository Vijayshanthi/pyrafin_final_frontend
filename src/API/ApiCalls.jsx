import axios from "axios";

export default {
  getTotalIncome: async function () {
    try {
      const response = await axios.get(
        `http://188.166.228.50:8089/income/getTotalIncomeRate`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenauth")}`,
          },
        }
      );
      return response;
    } catch (err) {
      return err;
    }
  },
  getUnpaidTotalIncome: async function () {
    try {
      const response = await axios.get(
        `http://188.166.228.50:8089/income/getUnpaidTotalIncomeRate`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenauth")}`,
          },
        }
      );

      return response;
    } catch (err) {
      return err;
    }
  },

  getTotalExpense: async function () {
    try {
      const response = await axios.get(
        `http://188.166.228.50:8089/expense/getDirectTotalExpenseRate`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenauth")}`,
          },
        }
      );
      return response;
    } catch (err) {
      return err;
    }
  },
  getUnpaidTotalExpense: async function () {
    try {
      const response = await axios.get(
        `http://188.166.228.50:8089/expense/getIndirectTotalExpenseRate`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenauth")}`,
          },
        }
      );
      return response;
    } catch (err) {
      return err;
    }
  },
};
