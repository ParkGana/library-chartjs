import axios from 'axios';

const AREA_REALTIME_STACK_A_DATA = ['5608', 'd556', 'e68a', 'd7c0', '4576'];
const AREA_REALTIME_STACK_B_DATA = ['775e', 'e537', '1151', 'a8c6', '8fc8'];
const AREA_REALTIME_SLIDE_A_DATA = ['909c', 'b126', '385d', '5d4d', '9784'];
const AREA_REALTIME_SLIDE_B_DATA = ['2bbd', '68b5', 'cb7d', '233e', 'ef42'];

const BAR_REALTIME_STACK_A_DATA = ['1a37', 'ac94', '9d80', '7f21', '9540'];
const BAR_REALTIME_STACK_B_DATA = ['38ca', '7c28', 'c575', 'd066', 'c2d7'];
const BAR_REALTIME_SLIDE_A_DATA = ['c710', '74f0', '3258', 'ea15', '7d03'];
const BAR_REALTIME_SLIDE_B_DATA = ['7b03', '6811', '8085', '797e', 'c994'];

const BUBBLE_REALTIME_A_DATA = ['02a4', 'ede5', '9fde', '742a', '9fca', '2ba8', '3d12', '9b78', 'f5d5', '36ae'];
const BUBBLE_REALTIME_B_DATA = ['2ad8', '51bb', '9360', 'c832', '36ae', '2a50', '67d0', '673a', '4273', 'ebc6'];

const LINE_REALTIME_STACK_A_DATA = ['0e28', '60bc', '49ff', 'c72b', 'bf9a'];
const LINE_REALTIME_STACK_B_DATA = ['802c', 'c732', 'd1b7', '61da', 'c86d'];
const LINE_REALTIME_SLIDE_A_DATA = ['7047', '5663', '60fb', '519a', '29c4'];
const LINE_REALTIME_SLIDE_B_DATA = ['0988', '47b0', 'd927', '8ff4', '9924'];

const SCATTER_REALTIME_A_DATA = ['8645', '98fe', 'b7d1', '8b41', '5f22', 'd516', '8bbe', '812b', '616e', 'b9be'];
const SCATTER_REALTIME_B_DATA = ['38c1', '124a', '42f3', '2815', '6e00', '694b', 'f864', 'e257', '860e', '5953'];

const API_URL = 'http://localhost:4000';

/**********************************************************************
 * Area 차트
 **********************************************************************/
export const resetAreaChartRealtimeStackADataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/area_realtime_stack_A`);
  const data = res.data.filter((item: any) => !AREA_REALTIME_STACK_A_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/area_realtime_stack_A/${id}`)));
};

export const resetAreaChartRealtimeStackBDataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/area_realtime_stack_B`);
  const data = res.data.filter((item: any) => !AREA_REALTIME_STACK_B_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/area_realtime_stack_B/${id}`)));
};

export const resetAreaChartRealtimeSlideADataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/area_realtime_slide_A`);
  const data = res.data.filter((item: any) => !AREA_REALTIME_SLIDE_A_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/area_realtime_slide_A/${id}`)));
};

export const resetAreaChartRealtimeSlideBDataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/area_realtime_slide_B`);
  const data = res.data.filter((item: any) => !AREA_REALTIME_SLIDE_B_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/area_realtime_slide_B/${id}`)));
};

/**********************************************************************
 * Bar 차트
 **********************************************************************/
export const resetBarChartRealtimeStackADataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/bar_realtime_stack_A`);
  const data = res.data.filter((item: any) => !BAR_REALTIME_STACK_A_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/bar_realtime_stack_A/${id}`)));
};

export const resetBarChartRealtimeStackBDataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/bar_realtime_stack_B`);
  const data = res.data.filter((item: any) => !BAR_REALTIME_STACK_B_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/bar_realtime_stack_B/${id}`)));
};

export const resetBarChartRealtimeSlideADataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/bar_realtime_slide_A`);
  const data = res.data.filter((item: any) => !BAR_REALTIME_SLIDE_A_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/bar_realtime_slide_A/${id}`)));
};

export const resetBarChartRealtimeSlideBDataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/bar_realtime_slide_B`);
  const data = res.data.filter((item: any) => !BAR_REALTIME_SLIDE_B_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/bar_realtime_slide_B/${id}`)));
};

/**********************************************************************
 * Bubble 차트
 **********************************************************************/
export const resetBubbleChartRealtimeADataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/bubble_realtime_A`);
  const data = res.data.filter((item: any) => !BUBBLE_REALTIME_A_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/bubble_realtime_A/${id}`)));
};

export const resetBubbleChartRealtimeBDataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/bubble_realtime_B`);
  const data = res.data.filter((item: any) => !BUBBLE_REALTIME_B_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/bubble_realtime_B/${id}`)));
};

/**********************************************************************
 * Line 차트
 **********************************************************************/
export const resetLineChartRealtimeStackADataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/line_realtime_stack_A`);
  const data = res.data.filter((item: any) => !LINE_REALTIME_STACK_A_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/line_realtime_stack_A/${id}`)));
};

export const resetLineChartRealtimeStackBDataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/line_realtime_stack_B`);
  const data = res.data.filter((item: any) => !LINE_REALTIME_STACK_B_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/line_realtime_stack_B/${id}`)));
};

export const resetLineChartRealtimeSlideADataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/line_realtime_slide_A`);
  const data = res.data.filter((item: any) => !LINE_REALTIME_SLIDE_A_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/line_realtime_slide_A/${id}`)));
};

export const resetLineChartRealtimeSlideBDataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/line_realtime_slide_B`);
  const data = res.data.filter((item: any) => !LINE_REALTIME_SLIDE_B_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/line_realtime_slide_B/${id}`)));
};

/**********************************************************************
 * Scatter 차트
 **********************************************************************/
export const resetScatterChartRealtimeADataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/scatter_realtime_A`);
  const data = res.data.filter((item: any) => !SCATTER_REALTIME_A_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/scatter_realtime_A/${id}`)));
};

export const resetScatterChartRealtimeBDataAPI = async (): Promise<void> => {
  const res = await axios.get(`${API_URL}/scatter_realtime_B`);
  const data = res.data.filter((item: any) => !SCATTER_REALTIME_B_DATA.includes(item.id));
  await Promise.all(data.map(({ id }: any) => axios.delete(`${API_URL}/scatter_realtime_B/${id}`)));
};
