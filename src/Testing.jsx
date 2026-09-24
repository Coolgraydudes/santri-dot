import React from "react"

import {
  CalendarDays,
  ChevronRight,
  Code2,
  Component,
  LayoutDashboard,
  Menu,
  Settings,
  Sparkles,
  User,
} from "lucide-react"

import { Button } from "./components/ui/button"
import { Calendar } from "./components/ui/calendar"
import { Input } from "./components/ui/input"
import { Marker } from "./components/ui/marker"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "./components/ui/field"

import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "./components/ui/questionnaire"

function Testing() {
  const [date, setDate] = React.useState(new Date())

  const questionnaireItems = [
    {
      name: "framework",
      required: true,
      prompt: "Which framework do you prefer?",
      description: "Choose the framework you use most often.",
      choices: [
        {
          value: "react",
          label: "React",
        },
        {
          value: "vue",
          label: "Vue",
        },
        {
          value: "angular",
          label: "Angular",
        },
      ],
    },
    {
      name: "experience",
      required: true,
      prompt: "How long have you been coding?",
      description: "Choose the option that best describes you.",
      choices: [
        {
          value: "beginner",
          label: "Beginner",
        },
        {
          value: "intermediate",
          label: "Intermediate",
        },
        {
          value: "advanced",
          label: "Advanced",
        },
      ],
    },
    {
      name: "goal",
      required: false,
      prompt: "What are you learning next?",
      description: "You can skip this question.",
      choices: [
        {
          value: "frontend",
          label: "Frontend",
        },
        {
          value: "backend",
          label: "Backend",
        },
        {
          value: "uiux",
          label: "UI/UX",
        },
      ],
    },
  ]

  function handleSubmit(event) {
    event.preventDefault()

    const answers = new FormData(event.currentTarget)

    console.log({
      framework: answers.get("framework"),
      experience: answers.get("experience"),
      goal: answers.get("goal"),
    })
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/30">

        {/* ================================= */}
        {/* SIDEBAR */}
        {/* ================================= */}

        <Sidebar>
          {/* Sidebar Header */}
          <SidebarHeader className="border-b">
            <div className="flex items-center gap-3 px-2 py-3">
              <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Sparkles className="size-5" />
              </div>

              <div className="flex flex-col">
                <span className="font-semibold">
                  Shadcn Lab
                </span>

                <span className="text-xs text-muted-foreground">
                  Component playground
                </span>
              </div>
            </div>
          </SidebarHeader>

          {/* Sidebar Content */}
          <SidebarContent>

            {/* Workspace */}
            <SidebarGroup>
              <SidebarGroupLabel>
                Workspace
              </SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>

                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <LayoutDashboard />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Component />
                      <span>Components</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <CalendarDays />
                      <span>Calendar</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Code2 />
                      <span>Forms</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* System */}
            <SidebarGroup>
              <SidebarGroupLabel>
                System
              </SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>

                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

          </SidebarContent>

          {/* Sidebar Footer */}
          <SidebarFooter className="border-t">
            <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-auto py-3">

                  <div className="flex size-8 items-center justify-center rounded-lg bg-muted">
                    <User className="size-4" />
                  </div>

                  <div className="flex flex-1 flex-col text-left">
                    <span className="text-sm font-medium">
                      Developer
                    </span>

                    <span className="text-xs text-muted-foreground">
                      Free account
                    </span>
                  </div>

                  <ChevronRight className="size-4" />

                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        {/* ================================= */}
        {/* MAIN CONTENT */}
        {/* ================================= */}

        <main className="min-w-0 flex-1">

          {/* Top Bar */}
          <header className="sticky top-0 z-10 flex h-14 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur">

            <SidebarTrigger />

            <div className="h-5 w-px bg-border" />

            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">
                Shadcn Lab
              </span>

              <ChevronRight className="size-4 text-muted-foreground" />

              <span className="text-muted-foreground">
                Dashboard
              </span>
            </div>

          </header>

          {/* Page Content */}
          <div className="mx-auto w-full max-w-6xl p-6 md:p-10">

            {/* Page Header */}
            <header className="mb-10">

              <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                <LayoutDashboard className="size-4" />
                <span>Dashboard</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight">
                Component Showcase
              </h1>

              <p className="mt-2 max-w-2xl text-muted-foreground">
                Explore and test different shadcn/ui components
                in one place.
              </p>

            </header>

            <div className="space-y-8">

              {/* ================================= */}
              {/* BUTTON VARIANTS */}
              {/* ================================= */}

              <section className="rounded-2xl border bg-background p-6 shadow-sm">

                <div className="mb-6">
                  <h2 className="text-xl font-semibold">
                    Button Variants
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Different visual styles available for buttons.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">

                  <Button>
                    Default
                  </Button>

                  <Button variant="outline">
                    Outline
                  </Button>

                  <Button variant="secondary">
                    Secondary
                  </Button>

                  <Button variant="ghost">
                    Ghost
                  </Button>

                  <Button variant="destructive">
                    Destructive
                  </Button>

                  <Button variant="link">
                    Link
                  </Button>

                </div>

              </section>

              {/* ================================= */}
              {/* BUTTON SIZES */}
              {/* ================================= */}

              <section className="rounded-2xl border bg-background p-6 shadow-sm">

                <div className="mb-6">
                  <h2 className="text-xl font-semibold">
                    Button Sizes
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Buttons available in different sizes.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">

                  <Button
                    variant="outline"
                    size="sm"
                  >
                    Small
                  </Button>

                  <Button
                    variant="outline"
                    size="default"
                  >
                    Default
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                  >
                    Large
                  </Button>

                  <Button
                    variant="outline"
                    size="xl"
                  >
                    Extra Large
                  </Button>

                </div>

              </section>

              {/* ================================= */}
              {/* CALENDAR */}
              {/* ================================= */}

              <section className="rounded-2xl border bg-background p-6 shadow-sm">

                <div className="mb-6">
                  <h2 className="text-xl font-semibold">
                    Calendar
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Select a date from the calendar.
                  </p>
                </div>

                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-xl border"
                />

                <div className="mt-4 rounded-lg bg-muted p-3 text-sm">
                  Selected date:{" "}
                  <span className="font-medium">
                    {date?.toLocaleDateString()}
                  </span>
                </div>

              </section>

              {/* ================================= */}
              {/* INPUT */}
              {/* ================================= */}

              <section className="rounded-2xl border bg-background p-6 shadow-sm">

                <div className="mb-6">
                  <h2 className="text-xl font-semibold">
                    Input
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Basic text input component.
                  </p>
                </div>

                <div className="max-w-md">
                  <Input
                    placeholder="Type something..."
                  />
                </div>

              </section>

              {/* ================================= */}
              {/* MARKER */}
              {/* ================================= */}

              <section className="rounded-2xl border bg-background p-6 shadow-sm">

                <div className="mb-6">
                  <h2 className="text-xl font-semibold">
                    Marker
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Highlight important pieces of content.
                  </p>
                </div>

                <p className="text-2xl font-semibold">
                  Build something{" "}
                  <Marker>
                    remarkable
                  </Marker>
                </p>

              </section>

              {/* ================================= */}
              {/* FIELD */}
              {/* ================================= */}

              <section className="rounded-2xl border bg-background p-6 shadow-sm">

                <div className="mb-6">
                  <h2 className="text-xl font-semibold">
                    Field
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Form fields with labels, descriptions,
                    and validation.
                  </p>
                </div>

                <div className="max-w-xl">

                  <FieldGroup>
                    <FieldSet>

                      <FieldLegend>
                        Personal Information
                      </FieldLegend>

                      <Field>

                        <FieldLabel htmlFor="name">
                          Name
                        </FieldLabel>

                        <FieldContent>

                          <Input
                            id="name"
                            placeholder="Enter your name"
                          />

                          <FieldDescription>
                            This will be displayed on your profile.
                          </FieldDescription>

                        </FieldContent>

                      </Field>

                      <Field>

                        <FieldLabel htmlFor="email">
                          Email
                        </FieldLabel>

                        <FieldContent>

                          <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                          />

                          <FieldDescription>
                            We'll never share your email.
                          </FieldDescription>

                        </FieldContent>

                      </Field>

                      <FieldSeparator />

                      <Field>

                        <FieldTitle>
                          Account
                        </FieldTitle>

                        <FieldDescription>
                          Manage your account information.
                        </FieldDescription>

                      </Field>

                      <Field>

                        <FieldLabel htmlFor="username">
                          Username
                        </FieldLabel>

                        <FieldContent>

                          <Input
                            id="username"
                            placeholder="Username"
                            aria-invalid="true"
                          />

                          <FieldError>
                            Username is required.
                          </FieldError>

                        </FieldContent>

                      </Field>

                    </FieldSet>
                  </FieldGroup>

                </div>

              </section>

              {/* ================================= */}
              {/* QUESTIONNAIRE */}
              {/* ================================= */}

              <section className="rounded-2xl border bg-background p-6 shadow-sm">

                <div className="mb-6">

                  <h2 className="text-xl font-semibold">
                    Questionnaire
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    A multi-step questionnaire component.
                  </p>

                </div>

                <div className="max-w-xl">

                  <Questionnaire
                    items={questionnaireItems}
                    onSubmit={handleSubmit}
                  >

                    <QuestionnaireProgress />

                    {questionnaireItems.map((question) => (
                      <QuestionnaireItem
                        key={question.name}
                        name={question.name}
                        required={question.required}
                      >

                        <QuestionnaireTitle>
                          {question.prompt}
                        </QuestionnaireTitle>

                        <QuestionnaireDescription>
                          {question.description}
                        </QuestionnaireDescription>

                        <QuestionnaireChoices>

                          {question.choices.map((choice) => (
                            <QuestionnaireChoice
                              key={choice.value}
                              value={choice.value}
                            >
                              {choice.label}
                            </QuestionnaireChoice>
                          ))}

                        </QuestionnaireChoices>

                        <QuestionnaireError />

                      </QuestionnaireItem>
                    ))}

                    <QuestionnaireActions>

                      <QuestionnairePrevious />

                      <QuestionnaireSkip />

                      <QuestionnaireNext />

                      <QuestionnaireSubmit>
                        Submit
                      </QuestionnaireSubmit>

                    </QuestionnaireActions>

                  </Questionnaire>

                </div>

              </section>

            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Testing

