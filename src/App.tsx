import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Epochs from "./pages/Epochs";
import Privileges from "./pages/Privileges";
import Rules from "./pages/Rules";
import Settlements from "./pages/Settlements";
import Team from "./pages/Team";
import Map from "./pages/Map";
import ModsPage from "./pages/ModsPage";
import Players from "./pages/Players";
import Creators from "./pages/Creators";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/epochs" element={<Epochs />} />
          <Route path="/privileges" element={<Privileges />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/settlements" element={<Settlements />} />
          <Route path="/team" element={<Team />} />
          <Route path="/map" element={<Map />} />
          <Route path="/mods" element={<ModsPage />} />
          <Route path="/players" element={<Players />} />
          <Route path="/creators" element={<Creators />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
