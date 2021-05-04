import { HomeState } from 'app/containers/Home/types';
import { CounterState } from 'app/containers/Counter/types';
import { EmployeeState } from 'app/containers/Employee/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  home?: HomeState;
  counter?: CounterState;
  employee?: EmployeeState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
