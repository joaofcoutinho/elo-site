"use client";

import { useState, useRef } from "react";
import { Send, Upload, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

const ESPECIALIDADES = [
  "Médico Radiologista",
  "Técnico em Radiologia",
  "Físico Médico",
  "Tecnólogo em Radiologia",
  "Comercial / Relacionamento",
  "Tecnologia da Informação",
  "Administrativo / Financeiro",
  "Outra",
];

export function CurriculumForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simula envio — integre com seu serviço de e-mail ou API aqui
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle2 size={52} className="text-[#0070B3]" />
        <h3 className="text-xl font-bold text-[#003A6B] font-[var(--font-plus-jakarta)]">
          Currículo recebido!
        </h3>
        <p className="text-[#4A5568] text-sm max-w-xs">
          Obrigado pelo interesse em fazer parte da equipe Elo e-Health. Entraremos em contato em breve.
        </p>
        <button
          onClick={() => { setStatus("idle"); setFileName(null); }}
          className="text-sm text-[#0070B3] font-medium hover:underline mt-2"
        >
          Enviar outro currículo
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Nome + Sobrenome */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Nome" required>
          <input
            name="nome"
            required
            placeholder="João"
            className={inputCls}
          />
        </Field>
        <Field label="Sobrenome" required>
          <input
            name="sobrenome"
            required
            placeholder="Silva"
            className={inputCls}
          />
        </Field>
      </div>

      {/* Email */}
      <Field label="E-mail" required>
        <input
          name="email"
          type="email"
          required
          placeholder="joao@exemplo.com"
          className={inputCls}
        />
      </Field>

      {/* Telefone */}
      <Field label="Telefone" required>
        <input
          name="telefone"
          type="tel"
          required
          placeholder="+55 (27) 99999-0000"
          className={inputCls}
        />
      </Field>

      {/* Especialidade */}
      <Field label="Área de interesse" required>
        <select name="especialidade" required className={inputCls}>
          <option value="">Selecione…</option>
          {ESPECIALIDADES.map((e) => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>
      </Field>

      {/* Mensagem */}
      <Field label="Mensagem (opcional)">
        <textarea
          name="mensagem"
          rows={3}
          placeholder="Conte-nos um pouco sobre você…"
          className={cn(inputCls, "resize-none")}
        />
      </Field>

      {/* Upload */}
      <Field label="Currículo (PDF)" required>
        <div
          onClick={() => fileRef.current?.click()}
          className={cn(
            "flex items-center gap-3 px-4 py-3 border border-[#CBD5E0] rounded-xl cursor-pointer",
            "hover:border-[#0070B3] hover:bg-[#EEF5FB] transition-colors text-sm",
            fileName ? "text-[#003A6B]" : "text-[#A0AEC0]"
          )}
        >
          <Upload size={16} className="flex-shrink-0 text-[#0070B3]" />
          <span className="truncate flex-1">
            {fileName ?? "Clique para fazer upload do currículo"}
          </span>
          {fileName && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setFileName(null); if (fileRef.current) fileRef.current.value = ""; }}
              className="text-[#878787] hover:text-red-500 transition-colors"
              aria-label="Remover arquivo"
            >
              <X size={14} />
            </button>
          )}
        </div>
        <input
          ref={fileRef}
          type="file"
          name="curriculo"
          accept=".pdf"
          required
          className="hidden"
          onChange={handleFileChange}
        />
        <p className="text-xs text-[#878787] mt-1.5">Apenas arquivos PDF · Máx. 5 MB</p>
      </Field>

      {/* Submit */}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full justify-center"
        size="md"
      >
        {status === "sending" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            <Send size={15} />
            Enviar Currículo
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#1A2E44]">
        {label}
        {required && <span className="text-[#0070B3] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full px-4 py-2.5 border border-[#CBD5E0] rounded-xl text-sm text-[#1A2E44] placeholder:text-[#A0AEC0] " +
  "focus:outline-none focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/15 transition-colors bg-white";
