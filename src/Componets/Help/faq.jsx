import React, { useMemo, useState } from "react";
import {
  Plus,
  Minus,
  Car,
  CircleHelp,
  ArrowUpRight,
  Search,
  X,
  SlidersHorizontal,
  FileText,
  Gauge,
  CreditCard,
  Repeat2,
  Truck,
  ShieldCheck,
  ArrowDownAZ,
  ArrowUpAZ,
  MessageCircle,
  Phone,
  ChevronDown,
} from "lucide-react";

import faqs from "./faqStore";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(
    faqs[0]?.question || null
  );

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const categories = [
    {
      name: "All",
      icon: CircleHelp,
    },
    {
      name: "Buying a Vehicle",
      icon: Car,
    },
    {
      name: "Test Drives",
      icon: Gauge,
    },
    {
      name: "Vehicle Inspection",
      icon: FileText,
    },
    {
      name: "Financing",
      icon: CreditCard,
    },
    {
      name: "Trade-In",
      icon: Repeat2,
    },
    {
      name: "Delivery",
      icon: Truck,
    },
    {
      name: "After-Sales Support",
      icon: ShieldCheck,
    },
  ];

  // --------------------------------------------------
  // FILTER + SEARCH + SORT
  // --------------------------------------------------

  const filteredFAQs = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    const filtered = faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" ||
        faq.category === activeCategory;

      const matchesSearch =
        !search ||
        faq.question.toLowerCase().includes(search) ||
        faq.answer.toLowerCase().includes(search) ||
        faq.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });

    const sorted = [...filtered];

    switch (sortBy) {
      case "az":
        sorted.sort((a, b) =>
          a.question.localeCompare(b.question)
        );
        break;

      case "za":
        sorted.sort((a, b) =>
          b.question.localeCompare(a.question)
        );
        break;

      case "category-az":
        sorted.sort((a, b) =>
          a.category.localeCompare(b.category)
        );
        break;

      case "category-za":
        sorted.sort((a, b) =>
          b.category.localeCompare(a.category)
        );
        break;

      default:
        break;
    }

    return sorted;
  }, [activeCategory, searchTerm, sortBy]);

  // --------------------------------------------------
  // CATEGORY COUNT
  // --------------------------------------------------

  const getCategoryCount = (category) => {
    if (category === "All") {
      return faqs.length;
    }

    return faqs.filter(
      (faq) => faq.category === category
    ).length;
  };

  // --------------------------------------------------
  // TOGGLE FAQ
  // --------------------------------------------------

  const toggleFAQ = (question) => {
    setOpenQuestion((current) =>
      current === question ? null : question
    );
  };

  // --------------------------------------------------
  // CHANGE CATEGORY
  // --------------------------------------------------

  const changeCategory = (category) => {
    setActiveCategory(category);
    setOpenQuestion(null);
  };

  // --------------------------------------------------
  // CLEAR SEARCH
  // --------------------------------------------------

  const clearSearch = () => {
    setSearchTerm("");
    setActiveCategory("All");
    setSortBy("default");
    setOpenQuestion(null);
  };

  // --------------------------------------------------
  // SORT ICON
  // --------------------------------------------------

  const isDescending =
    sortBy === "za" ||
    sortBy === "category-za";

  return (
    <section className="w-full bg-gray-100 px-6 py-14 md:px-12">

      <div className="mx-auto w-full max-w-[1500px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 lg:mb-14">

          {/* Small Label */}
          <div className="mb-5 flex items-center gap-3">

            <span className="h-[2px] w-10 bg-orange-500" />

            <div className="flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-1.5">

              <CircleHelp
                size={14}
                className="text-orange-600"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-600">
                FAQ
              </span>

            </div>

          </div>

          {/* Heading */}
          <div className="max-w-4xl">

            <h2 className="text-3xl font-black leading-tight tracking-tight text-gray-900 md:text-4xl">

              Frequently Asked{" "}

              <span className="text-orange-500">
                Questions
              </span>

            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Find quick answers about buying vehicles,
              test drives, financing, inspections, trade-ins,
              delivery and after-sales support at Suna Motors.
            </p>

          </div>

          {/* Decorative divider */}
          <div className="mt-7 flex items-center gap-4">

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="h-px w-16 bg-gray-300" />
              <Car
                size={18}
                className="text-orange-500"
              />
              <span className="h-px w-16 bg-gray-300" />
            </div>

            <div className="hidden h-px flex-1 bg-gray-200 sm:block" />

          </div>

        </div>


        {/* =====================================================
            SEARCH BAR
        ===================================================== */}

        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">

          <div className="flex flex-col gap-3 lg:flex-row">

            {/* Search */}
            <div className="flex min-w-0 flex-1 items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition-all focus-within:border-orange-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-orange-500/10">

              <Search
                size={19}
                className="shrink-0 text-gray-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                placeholder="Search questions, topics or answers..."
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-200 hover:text-gray-700"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}

            </div>


            {/* Sort */}
            <div className="relative flex items-center overflow-hidden rounded-xl border border-gray-200 bg-white">

              <div className="flex h-[50px] w-11 items-center justify-center border-r border-gray-100 text-orange-600">

                {isDescending ? (
                  <ArrowUpAZ size={17} />
                ) : (
                  <ArrowDownAZ size={17} />
                )}

              </div>

              <span className="hidden px-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 sm:block">
                Sort
              </span>

              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setOpenQuestion(null);
                }}
                className="h-[50px] cursor-pointer appearance-none bg-white px-3 pr-10 text-xs font-semibold text-gray-700 outline-none transition-colors hover:text-orange-600"
                aria-label="Sort frequently asked questions"
              >
                <option value="default">
                  Default
                </option>

                <option value="az">
                  Question A → Z
                </option>

                <option value="za">
                  Question Z → A
                </option>

                <option value="category-az">
                  Category A → Z
                </option>

                <option value="category-za">
                  Category Z → A
                </option>

              </select>

              <ChevronDown
                size={15}
                className="pointer-events-none absolute right-3 text-gray-400"
              />

            </div>

          </div>

        </div>


        {/* =====================================================
            CATEGORY FILTER
        ===================================================== */}

        <div className="mb-10">

          <div className="mb-3 flex items-center gap-2">

            <SlidersHorizontal
              size={15}
              className="text-orange-500"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
              Browse by category
            </span>

          </div>


          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">

            {categories.map((category) => {

              const Icon = category.icon;

              const active =
                activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() =>
                    changeCategory(category.name)
                  }
                  className={`
                    group
                    flex
                    shrink-0
                    items-center
                    gap-2.5
                    rounded-xl
                    border
                    px-4
                    py-3
                    text-xs
                    font-semibold
                    transition-all
                    duration-200

                    ${
                      active
                        ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                        : "border-gray-200 bg-white text-gray-600 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
                    }
                  `}
                >

                  <Icon size={15} />

                  <span>
                    {category.name}
                  </span>

                  <span
                    className={`
                      rounded-full px-2 py-0.5 text-[9px] font-bold

                      ${
                        active
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-400 group-hover:bg-orange-100 group-hover:text-orange-600"
                      }
                    `}
                  >
                    {getCategoryCount(
                      category.name
                    )}
                  </span>

                </button>
              );

            })}

          </div>

        </div>


        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[340px_minmax(0,1fr)]">


          {/* =================================================
              LEFT SIDEBAR
          ================================================= */}

          <aside className="hidden lg:block">

            <div className="sticky top-24">

              {/* Stats Card */}
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-orange-600 to-transparent" />

                <div className="p-6">

                  <div className="mb-6 flex items-center justify-between">

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                        Knowledge Base
                      </p>

                      <h3 className="mt-1 text-xl font-black text-gray-900">
                        Help Center
                      </h3>

                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                      <CircleHelp size={21} />
                    </div>

                  </div>


                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">

                    <div className="rounded-2xl bg-gray-50 p-4">

                      <p className="text-2xl font-black text-gray-900">
                        {faqs.length}
                      </p>

                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        Questions
                      </p>

                    </div>


                    <div className="rounded-2xl bg-gray-50 p-4">

                      <p className="text-2xl font-black text-gray-900">
                        {categories.length - 1}
                      </p>

                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        Categories
                      </p>

                    </div>

                  </div>


                  {/* Support */}
                  <div className="mt-5 rounded-2xl bg-[#080b0f] p-5 text-white">

                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500">
                      <MessageCircle size={18} />
                    </div>

                    <h4 className="font-bold">
                      Still need help?
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-gray-400">
                      Our team is ready to answer your
                      questions and help you find the
                      right vehicle.
                    </p>

                    <a
                      href="/contact"
                      className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold transition hover:border-orange-500/50 hover:bg-orange-500"
                    >
                      Contact Support
                      <ArrowUpRight size={15} />
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </aside>


          {/* =================================================
              FAQ LIST
          ================================================= */}

          <div>

            {/* Results Header */}
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-sm font-bold text-gray-900">

                  {filteredFAQs.length}{" "}

                  <span className="font-medium text-gray-400">
                    {filteredFAQs.length === 1
                      ? "result"
                      : "results"}{" "}
                    found
                  </span>

                </p>

                {(searchTerm ||
                  activeCategory !== "All") && (
                  <p className="mt-1 text-xs text-gray-400">

                    {searchTerm && (
                      <>
                        Searching for{" "}
                        <span className="font-semibold text-gray-600">
                          “{searchTerm}”
                        </span>
                      </>
                    )}

                    {searchTerm &&
                      activeCategory !==
                        "All" && (
                        <> · </>
                      )}

                    {activeCategory !== "All" && (
                      <>
                        Category:{" "}
                        <span className="font-semibold text-gray-600">
                          {activeCategory}
                        </span>
                      </>
                    )}

                  </p>
                )}

              </div>


              {(searchTerm ||
                activeCategory !== "All" ||
                sortBy !== "default") && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="flex w-fit items-center gap-2 text-xs font-bold text-orange-600 transition hover:text-orange-700"
                >
                  <X size={14} />
                  Reset filters
                </button>
              )}

            </div>


            {/* FAQ Items */}

            {filteredFAQs.length > 0 ? (

              <div className="space-y-3">

                {filteredFAQs.map((faq, index) => {

                  const isOpen =
                    openQuestion ===
                    faq.question;

                  return (
                    <div
                      key={`${faq.question}-${index}`}
                      className={`
                        overflow-hidden
                        rounded-2xl
                        border
                        bg-white
                        transition-all
                        duration-300

                        ${
                          isOpen
                            ? "border-orange-200 shadow-lg shadow-orange-500/5"
                            : "border-gray-200 shadow-sm hover:border-gray-300"
                        }
                      `}
                    >

                      {/* Question */}
                      <button
                        type="button"
                        onClick={() =>
                          toggleFAQ(
                            faq.question
                          )
                        }
                        className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                        aria-expanded={isOpen}
                      >

                        {/* Number */}
                        <span
                          className={`
                            hidden
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            text-[10px]
                            font-black
                            sm:flex

                            ${
                              isOpen
                                ? "bg-orange-500 text-white"
                                : "bg-gray-100 text-gray-400"
                            }
                          `}
                        >
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>


                        {/* Question Content */}
                        <div className="min-w-0 flex-1">

                          <div className="mb-1.5 flex flex-wrap items-center gap-2">

                            <span
                              className={`
                                rounded-full
                                px-2
                                py-1
                                text-[8px]
                                font-bold
                                uppercase
                                tracking-wider

                                ${
                                  isOpen
                                    ? "bg-orange-50 text-orange-600"
                                    : "bg-gray-100 text-gray-400"
                                }
                              `}
                            >
                              {faq.category}
                            </span>

                          </div>

                          <h3
                            className={`
                              text-sm
                              font-bold
                              leading-6
                              transition-colors
                              sm:text-base

                              ${
                                isOpen
                                  ? "text-orange-600"
                                  : "text-gray-800"
                              }
                            `}
                          >
                            {faq.question}
                          </h3>

                        </div>


                        {/* Toggle */}
                        <span
                          className={`
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            transition-all

                            ${
                              isOpen
                                ? "bg-orange-500 text-white rotate-0"
                                : "bg-gray-100 text-gray-500"
                            }
                          `}
                        >

                          {isOpen ? (
                            <Minus size={17} />
                          ) : (
                            <Plus size={17} />
                          )}

                        </span>

                      </button>


                      {/* Answer */}
                      <div
                        className={`
                          grid transition-all duration-300

                          ${
                            isOpen
                              ? "grid-rows-[1fr]"
                              : "grid-rows-[0fr]"
                          }
                        `}
                      >

                        <div className="overflow-hidden">

                          <div className="border-t border-gray-100 px-5 pb-6 pt-5 sm:px-6 sm:pl-[88px]">

                            <p className="max-w-3xl text-sm leading-7 text-gray-500">
                              {faq.answer}
                            </p>


                            {/* Helpful footer */}
                            <div className="mt-5 flex items-center gap-3">

                              <div className="h-px flex-1 bg-gray-100" />

                              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-300">
                                Suna Motors Help
                              </span>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>
                  );

                })}

              </div>

            ) : (

              /* =================================================
                 EMPTY STATE
              ================================================= */

              <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">

                  <Search size={25} />

                </div>

                <h3 className="mt-5 text-lg font-black text-gray-900">
                  No questions found
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                  We couldn't find any FAQs matching
                  your search or selected category.
                  Try another search term or reset
                  your filters.
                </p>

                <button
                  type="button"
                  onClick={clearSearch}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
                >
                  <X size={15} />
                  Reset Filters
                </button>

              </div>

            )}


            {/* =================================================
                MOBILE SUPPORT CARD
            ================================================= */}

            <div className="mt-8 lg:hidden">

              <div className="relative overflow-hidden rounded-3xl bg-[#080b0f] p-6 text-white">

                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />

                <div className="relative">

                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500">
                      <MessageCircle size={19} />
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-gray-500"
                    />

                  </div>

                  <h3 className="mt-5 text-lg font-black">
                    Still need help?
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-gray-400">
                    Can't find what you're looking
                    for? Talk directly with the Suna
                    Motors team.
                  </p>

                  <a
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-gray-900 transition hover:bg-orange-500 hover:text-white"
                  >
                    Contact Support
                    <ArrowUpRight size={14} />
                  </a>

                </div>

              </div>

            </div>


            {/* =================================================
                BOTTOM PHONE CTA
            ================================================= */}

            <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <Phone size={17} />
                </div>

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                    Need direct assistance?
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-gray-800">
                    Speak with our team
                  </p>

                </div>

              </div>

              <a
                href="tel:0768347102"
                className="flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-xs font-bold text-white transition hover:bg-orange-500"
              >
                Call Suna Motors
                <ArrowUpRight size={14} />
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;