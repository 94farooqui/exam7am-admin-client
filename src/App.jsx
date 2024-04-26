import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssessmentHomePage from "./pages/AssessmentHomePage";
import DrivingHomePage from "./pages/DrivingHomePage";
import Home from "./pages/Home";
import QuizListPage from "./pages/QuizListPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import SchoolProgram from "./pages/SchoolProgram";
import DrivingCountry from "./pages/DrivingCountry";
import NewAssessmentCategory from "./pages/NewAssessmentCategory";
import AssessmentDetails from "./pages/AssessmentDetails";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import AssessmentNewQuestion from "./pages/AssessmentNewQuestion";
import AssessmentEditQuestion from "./pages/AssessmentEditQuestion";
import ModulePage from "./pages/ModulePage";
import NewModule from "./pages/NewModule";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route path="/module/new" element={<NewModule />} />
            <Route path="/:module" element={<ModulePage />} />
            <Route path="/:module/new" element={<NewAssessmentCategory />} />
            <Route path="/:module/:category" element={<AssessmentDetails />} />
            <Route path="/:module/:category/newQuestion" element={<AssessmentNewQuestion />} />
            <Route path="/quiz" element={<QuizListPage />} />
            <Route path="/assessment" element={<AssessmentHomePage />}></Route>
            <Route path="/assessment/:id" element={<AssessmentDetails />} />
            <Route
              path="/assessment/:id/edit/:qid"
              element={<AssessmentEditQuestion />}
            />
            <Route
              path="/assessment/:id/newQuestion"
              element={<AssessmentNewQuestion />}
            />

            <Route path="/assessment/new" element={<NewAssessmentCategory />} />
            <Route path="/driving" element={<DrivingHomePage />} />
            <Route path="/driving/:country" element={<DrivingCountry />} />
            <Route path="/school" element={<SchoolProgram />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
