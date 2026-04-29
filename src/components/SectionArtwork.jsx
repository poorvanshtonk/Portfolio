import React from "react";

const variants = {
  hero: (
    <>
      <path d="M52 214 C118 124 206 128 270 58" />
      <path d="M92 264 C162 208 212 228 304 164" />
      <circle cx="52" cy="214" r="7" />
      <circle cx="270" cy="58" r="7" />
      <circle cx="304" cy="164" r="5" />
      <path d="M346 78 h54 v54 h-54 z" />
      <path d="M358 91 h30 M358 106 h20 M358 121 h26" />
    </>
  ),
  about: (
    <>
      <path d="M44 74 h108 v72 H44 z" />
      <path d="M66 98 h64 M66 122 h42" />
      <path d="M216 48 l74 42 -74 42 -74 -42 74 -42Z" />
      <path d="M142 90 v78 l74 42 74 -42 V90" />
      <circle cx="344" cy="196" r="28" />
      <path d="M329 196 h30 M344 181 v30" />
    </>
  ),
  skills: (
    <>
      <circle cx="72" cy="96" r="24" />
      <circle cx="190" cy="54" r="20" />
      <circle cx="304" cy="120" r="28" />
      <circle cx="168" cy="210" r="22" />
      <path d="M94 88 171 61 M207 64 280 106 M291 145 188 195 M153 200 91 113" />
      <path d="M56 274 h300 M84 250 v24 M158 230 v44 M236 244 v30 M318 218 v56" />
    </>
  ),
  projects: (
    <>
      <path d="M58 78 h84 v62 H58 z" />
      <path d="M248 62 h102 v76H248z" />
      <path d="M118 222 h130 v74H118z" />
      <path d="M142 109 C185 108 202 99 248 100" />
      <path d="M299 138 C289 190 265 212 248 222" />
      <path d="M118 222 C92 190 84 165 100 140" />
      <circle cx="142" cy="109" r="5" />
      <circle cx="248" cy="100" r="5" />
      <circle cx="248" cy="222" r="5" />
      <circle cx="100" cy="140" r="5" />
    </>
  ),
  connect: (
    <>
      <path d="M64 112 C122 36 232 32 310 94" />
      <path d="M70 222 C140 158 230 168 328 126" />
      <path d="M86 116 l54 38 68 -72 68 58 54 -42" />
      <circle cx="86" cy="116" r="8" />
      <circle cx="140" cy="154" r="8" />
      <circle cx="208" cy="82" r="8" />
      <circle cx="276" cy="140" r="8" />
      <circle cx="330" cy="98" r="8" />
      <path d="M82 262 h256" />
    </>
  ),
  contact: (
    <>
      <path d="M58 92 h286 v154 H58 z" />
      <path d="m58 92 143 92 143-92" />
      <path d="M112 284 C154 252 204 252 248 284" />
      <path d="M122 54 h164" />
      <path d="M146 32 h116" />
      <circle cx="86" cy="284" r="6" />
      <circle cx="274" cy="284" r="6" />
    </>
  ),
  detail: (
    <>
      <path d="M82 64 h236 v86H82z" />
      <path d="M108 94 h132 M108 120 h72" />
      <path d="M72 240 h92 v78H72z" />
      <path d="M196 240 h92 v78h-92z" />
      <path d="M320 240 h92v78h-92z" />
      <path d="M200 150 v46 M118 196 h248 M118 196 v44 M242 196 v44 M366 196 v44" />
    </>
  ),
};

const SectionArtwork = ({ variant, className = "" }) => (
  <svg
    className={`section-artwork ${className}`}
    viewBox="0 0 420 340"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <g>{variants[variant] || variants.hero}</g>
  </svg>
);

export default SectionArtwork;
