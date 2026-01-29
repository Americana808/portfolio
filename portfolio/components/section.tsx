"use client";

import { motion } from "framer-motion";
import React from "react";

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="space-y-4 scroll-mt-24"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
      {children}
    </motion.section>
  );
}
