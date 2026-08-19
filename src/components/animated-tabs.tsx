
"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

type TabsContextValue = {
  activeTab: string
  setActiveTab: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const context = React.useContext(TabsContext)

  if (!context) {
    throw new Error(
      "AnimatedTabs components must be used inside <AnimatedTabs>"
    )
  }

  return context
}

type AnimatedTabsProps = {
  defaultValue: string
  children: React.ReactNode
  className?: string
}

function AnimatedTabs({
  defaultValue,
  children,
  className,
}: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("flex flex-col gap-4", className)}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

type AnimatedTabsListProps = {
  children: React.ReactNode
  className?: string
}

function AnimatedTabsList({
  children,
  className,
}: AnimatedTabsListProps) {
  return (
    <div
      className={cn(
        "relative inline-flex w-fit items-center rounded-full bg-muted p-1",
        className
      )}
    >
      {children}
    </div>
  )
}

type AnimatedTabsTriggerProps = {
  value: string
  children: React.ReactNode
  className?: string
}

function AnimatedTabsTrigger({
  value,
  children,
  className,
}: AnimatedTabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext()

  const isActive = activeTab === value

  return (
    <button
      type="button"
      onClick={() => setActiveTab(value)}
      className={cn(
        "relative z-10 cursor-pointer px-4 py-2 text-sm font-medium",
        "text-muted-foreground transition-colors duration-300",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-ring",
        isActive && "text-foreground",
        className
      )}
    >
      {isActive && (
        <motion.div
          layoutId="active-tab"
          className="absolute inset-0 -z-10 rounded-full bg-background shadow-sm"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
          }}
        />
      )}

      <span className="relative z-10">
        {children}
      </span>
    </button>
  )
}

type AnimatedTabsContentProps = {
  value: string
  children: React.ReactNode
  className?: string
}

function AnimatedTabsContent({
  value,
  children,
  className,
}: AnimatedTabsContentProps) {
  const { activeTab } = useTabsContext()

  if (activeTab !== value) {
    return null
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export {
  AnimatedTabs,
  AnimatedTabsList,
  AnimatedTabsTrigger,
  AnimatedTabsContent,
}