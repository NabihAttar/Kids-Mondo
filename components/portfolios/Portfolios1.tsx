"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

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

/** Popup Modal */
function CharacterModal({
  open,
  onClose,
  title,
  body,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  body?: string;
}) {
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

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
          width: "min(820px, 100%)",
          borderRadius: 16,
          background: "#fff",
          padding: 24,
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          maxHeight: "min(80vh, 900px)",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            alignItems: "flex-start",
          }}
        >
          <div>
            <h2 style={{ margin: 0, fontSize: 28, lineHeight: 1.2 }}>{title}</h2>
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
              flex: "0 0 auto",
            }}
          >
            ✕
          </button>
        </div>

        <p
          style={{
            marginTop: 14,
            fontSize: 18,
            lineHeight: 1.7,
            opacity: 0.95,
            whiteSpace: "pre-wrap",
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

export default function Portfolios1() {
  // Safe array fallback (never undefined)
  const items = useMemo<CharacterItem[]>(() => {
    const data: any = projectsData as any;
    return Array.isArray(data?.projects10) ? (data.projects10 as CharacterItem[]) : [];
  }, []);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<CharacterItem | null>(null);

  // Drag/click detection to work with StackCards
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const movedRef = useRef(false);

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
            <h2
              className="mxd-section__title anim-uni-in-up"
              style={{ marginBottom: "30px" }}
            >
              The Characters Behind KidzMondo
            </h2>

            <p
              className="mxd-section__subtitle anim-uni-in-up"
              style={{ fontSize: "2rem" }}
            >
              Every great city begins with a vision and so is KidzMondo, brought
              to life by four symbolic founders who turned imagination into
              order and play into purpose.
            </p>
          </div>

          <div className="mxd-container grid-container">
            <div className="mxd-block mxd-grid-item no-margin">
              <div className="content__block loading__fade">
                <StackCards stackName="projects-stack" className="stack-wrapper">
                  {items.map((s, idx, arr) => {
                    const imgSrc = encodeURI(s.image);
                    const isBlackTitle = idx === 1 || idx === arr.length - 1;

                    return (
                      <div
                        key={s.id}
                        className="mxd-projects-stack__inner justify-between"
                        role="button"
                        tabIndex={0}
                        onPointerDown={(e) => {
                          startRef.current = { x: e.clientX, y: e.clientY };
                          movedRef.current = false;
                        }}
                        onPointerMove={(e) => {
                          if (!startRef.current) return;
                          const dx = Math.abs(e.clientX - startRef.current.x);
                          const dy = Math.abs(e.clientY - startRef.current.y);
                          if (dx + dy > 6) movedRef.current = true;
                        }}
                        onPointerUp={(e) => {
                          e.stopPropagation();
                          if (!movedRef.current) openModal(s);
                          startRef.current = null;
                        }}
                        onPointerCancel={() => {
                          startRef.current = null;
                          movedRef.current = false;
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openModal(s);
                          }
                        }}
                        style={{
                          cursor: "pointer",
                          touchAction: "manipulation",
                        }}
                      >
                        <div className="mxd-projects-stack__image">
                          <Image
                            alt={s.title}
                            src={imgSrc}
                            width={1920}
                            height={1080}
                          />
                        </div>

                        <div className="mxd-projects-stack__title no-margin">
                          <h2
                            className="permanent-light"
                            style={{ color: isBlackTitle ? "#000" : undefined }}
                          >
                            {s.title}
                          </h2>
                        </div>

                        {/* Optional: if you want description instead of title, keep this block
                        <div className="mxd-projects-stack__title no-margin">
                          <h2
                            className="permanent-light"
                            style={{
                              fontSize: "22px",
                              color: isBlackTitle ? "#000" : undefined,
                            }}
                          >
                            {s.description ?? ""}
                          </h2>
                        </div>
                        */}
                      </div>
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
        title={selected?.title?.trim() ? selected?.title : "Details"}
        body={selected?.description1 ?? ""}
      />
    </>
  );
}
