export const supportApi = {
  async getTickets() {
    return [
      { id: "REQ001", customer: "Nguyễn Văn A", status: "Đang xử lý" },
      { id: "REQ002", customer: "Lê Thị B", status: "Hoàn thành" },
    ];
  },

  async getFeedback() {
    return [
      { id: 1, text: "Dịch vụ rất tốt!", user: "Nguyễn Văn A" },
      { id: 2, text: "Cần cải thiện xử lý khiếu nại", user: "Lê Thị B" },
    ];
  },
};
