import { createContext, useContext, type ReactNode } from "react";
import { portfolioData, type PortfolioData } from "../data/portfolioData";

const PortfolioContext = createContext<PortfolioData | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within PortfolioProvider");
  }
  return context;
}
