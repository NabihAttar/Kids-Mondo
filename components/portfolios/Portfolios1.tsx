"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useMemo, useState } from "react";

import StackCards from "../animation/StackCards";
import projectsData from "@/data/projects.json";

type CharacterItem = {
  id: string | number;
  title: string;
  description?: string;
  description1?: string;
  image: string;
  tags?: string[];
};

function CharacterModal({
  open,
  onClose,
  title,
  subtitle,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(720px, 100%)",
          borderRadius: 16,
          background: "#fff",
          padding: 24,
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 28, lineHeight: 1.2 }}>{title}</h2>
            <p style={{ marginTop: 10, fontSize: 18, lineHeight: 1.6, opacity: 0.9 }}>
              {subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 40,
              height: 40,
              borderRadius: 999,
              border: "1px solid rgba(0,0,0,0.12)",
              background: "#fff",
              cursor: "pointer",
              fontSize: 18,
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Portfolios1() {
  const items = useMemo(() => (projectsData.projects10 as CharacterItem[]) ?? [], []);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<CharacterItem | null>(null);

  const close = () => {
    setOpen(false);
    setSelected(null);
  };

  const openModal = (item: CharacterItem) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <>
      <div className="mxd-section padding-pinned-img-pre-mtext">
        <div className="mxd-container">
          <div className="mxd-section__heading text-center">
            <h2 className="mxd-section__title anim-uni-in-up" style={{ marginBottom: "30px" }}>
              The Characters Behind KidzMondo
            </h2>
            <p className="mxd-section__subtitle anim-uni-in-up" style={{ fontSize: "2rem" }}>
              Every great city begins with a vision and so is KidzMondo, brought to life by four
              symbolic founders who turned imagination into order and play into purpose.
            </p>
          </div>

          <div className="mxd-container grid-container">
            <div className="mxd-block mxd-grid-item no-margin">
              <div className="content__block loading__fade">
                <StackCards stackName="projects-stack" className="stack-wrapper">
                  {items.map((s, idx) => {
                    const imgSrc = encodeURI(s.image); // handles spaces like "Modified (2).png"

                    return (
                      <Link
                        key={s.id}
                        className="mxd-projects-stack__inner justify-between"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal(s);
                        }}
                      >
                        <div className="mxd-projects-stack__image">
                          <Image alt={s.title} src={imgSrc} width={1920} height={1080} />
                        </div>

                        <div className="mxd-projects-stack__title no-margin">
                          <h2
                            className="permanent-light"
                            style={{ color: idx === 1 ? "#000" : undefined }}
                          >
                            {s.title}
                          </h2>
                        </div>

                        <div className="mxd-projects-stack__title no-margin">
                          <h2
                            className="permanent-light"
                            style={{
                              fontSize: "22px",
                              color: idx === 1 || idx === 4 ? "#000" : undefined,
                            }}
                          >
                            {s.description ?? ""}
                          </h2>
                        </div>
                      </Link>
                    );
                  })}
                </StackCards>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CharacterModal
        open={open}
        onClose={close}
        title={selected?.title}
        subtitle={selected?.description1 ?? selected?.description ?? ""}
      />
    </>
  );
}
