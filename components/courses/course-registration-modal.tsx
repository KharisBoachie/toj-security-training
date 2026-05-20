"use client";

import { useMemo, useState } from "react";

import { PremiumButton } from "@/components/primitives/premium-button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  type CourseOption,
  type CourseRegistrationFormData,
} from "@/lib/data/courses";

type CourseRegistrationModalProps = {
  course: CourseOption;
  onOpenChange: (open: boolean) => void;
};

function buildInitialData(selectedCourse: string): CourseRegistrationFormData {
  return {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    addressLine1: "",
    addressLine2: "",
    townCity: "",
    postcode: "",
    selectedCourse,
    preferredStart: "As soon as possible",
    applyingAs: "Individual learner",
    siaLicenceStatus: "Not applicable",
    englishPreparationNeed: "Not sure",
    accessibilitySupport: "Prefer to discuss",
    notes: "",
    consentContact: false,
    consentAccuracy: false,
  };
}

export function CourseRegistrationModal({
  course,
  onOpenChange,
}: CourseRegistrationModalProps) {
  const [formData, setFormData] = useState<CourseRegistrationFormData>(
    buildInitialData(course.title),
  );
  const [showFrontendNotice, setShowFrontendNotice] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const requiredFieldErrors = useMemo(() => {
    const errors: string[] = [];
    if (!formData.firstName.trim()) errors.push("firstName");
    if (!formData.lastName.trim()) errors.push("lastName");
    if (!formData.email.trim()) errors.push("email");
    if (!formData.phone.trim()) errors.push("phone");
    if (!formData.dateOfBirth.trim()) errors.push("dateOfBirth");
    if (!formData.consentContact) errors.push("consentContact");
    if (!formData.consentAccuracy) errors.push("consentAccuracy");
    return errors;
  }, [formData]);

  const hasValidationIssues = requiredFieldErrors.length > 0;

  const fieldError = (field: string) =>
    attemptedSubmit && requiredFieldErrors.includes(field);

  const updateField = <K extends keyof CourseRegistrationFormData>(
    key: K,
    value: CourseRegistrationFormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const submitPlaceholder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttemptedSubmit(true);
    if (hasValidationIssues) return;
    setShowFrontendNotice(true);
  };

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent className="modal-scroll-area premium-scrollbar max-h-[90svh] w-full max-w-[calc(100%-1rem)] overflow-y-auto rounded-[1.75rem] border border-brand-blue/14 bg-[linear-gradient(160deg,rgba(250,252,248,0.98)_0%,rgba(245,249,244,0.94)_100%)] p-0 shadow-[0_44px_120px_-70px_hsl(var(--wc-shadow-color)/0.46)] sm:max-w-4xl">
        <DialogHeader className="space-y-3 border-b border-line/70 px-7 pt-8 pb-6 sm:px-10">
          <DialogTitle className="text-2xl leading-[1.04] tracking-[-0.04em] text-ink sm:text-3xl">
            Register interest for {course.title}
          </DialogTitle>
          <DialogDescription className="max-w-prose text-sm leading-7 text-ink-muted">
            Complete the form and TOJ Security Training will contact you with
            next steps.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-9 px-7 py-8 sm:px-10 sm:py-9" onSubmit={submitPlaceholder}>
          <section className="space-y-5">
            <h3 className="text-sm font-semibold tracking-[0.14em] uppercase text-primary/80">
              Personal details
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(event) => updateField("firstName", event.target.value)}
                  aria-invalid={fieldError("firstName")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(event) => updateField("lastName", event.target.value)}
                  aria-invalid={fieldError("lastName")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  aria-invalid={fieldError("email")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  aria-invalid={fieldError("phone")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(event) => updateField("dateOfBirth", event.target.value)}
                  aria-invalid={fieldError("dateOfBirth")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="addressLine1">Address line 1</Label>
                <Input
                  id="addressLine1"
                  value={formData.addressLine1}
                  onChange={(event) => updateField("addressLine1", event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="addressLine2">Address line 2</Label>
                <Input
                  id="addressLine2"
                  value={formData.addressLine2}
                  onChange={(event) => updateField("addressLine2", event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="townCity">Town / City</Label>
                <Input
                  id="townCity"
                  value={formData.townCity}
                  onChange={(event) => updateField("townCity", event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postcode">Postcode</Label>
                <Input
                  id="postcode"
                  value={formData.postcode}
                  onChange={(event) => updateField("postcode", event.target.value)}
                />
              </div>
            </div>
          </section>

          <Separator />

          <section className="space-y-5">
            <h3 className="text-sm font-semibold tracking-[0.14em] uppercase text-primary/80">
              Course details
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="selectedCourse">Selected course</Label>
                <Input id="selectedCourse" value={formData.selectedCourse} readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredStart">Preferred start timeframe</Label>
                <Select
                  id="preferredStart"
                  value={formData.preferredStart}
                  onValueChange={(value) =>
                    updateField(
                      "preferredStart",
                      value as CourseRegistrationFormData["preferredStart"],
                    )
                  }
                  options={[
                    { value: "As soon as possible", label: "As soon as possible" },
                    { value: "Within 1 month", label: "Within 1 month" },
                    { value: "Within 3 months", label: "Within 3 months" },
                    { value: "Not sure yet", label: "Not sure yet" },
                  ]}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="applyingAs">Are you applying as</Label>
                <Select
                  id="applyingAs"
                  value={formData.applyingAs}
                  onValueChange={(value) =>
                    updateField(
                      "applyingAs",
                      value as CourseRegistrationFormData["applyingAs"],
                    )
                  }
                  options={[
                    { value: "Individual learner", label: "Individual learner" },
                    {
                      value: "Employer / organisation",
                      label: "Employer / organisation",
                    },
                    { value: "Referrer / sponsor", label: "Referrer / sponsor" },
                  ]}
                />
              </div>
            </div>
          </section>

          <Separator />

          <section className="space-y-5">
            <h3 className="text-sm font-semibold tracking-[0.14em] uppercase text-primary/80">
              Eligibility & support
            </h3>

            <div className="space-y-2">
              <Label>Do you currently hold an SIA licence?</Label>
              <RadioGroup>
                <div className="grid gap-2 sm:grid-cols-2">
                  {(["Yes", "No", "In progress", "Not applicable"] as const).map(
                    (option) => (
                      <RadioGroupItem
                        key={option}
                        id={`sia-${option}`}
                        name="siaLicenceStatus"
                        value={option}
                        checked={formData.siaLicenceStatus === option}
                        onChange={() => updateField("siaLicenceStatus", option)}
                        label={option}
                      />
                    ),
                  )}
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Do you need English language preparation?</Label>
              <RadioGroup>
                <div className="grid gap-2 sm:grid-cols-3">
                  {(["Yes", "No", "Not sure"] as const).map((option) => (
                    <RadioGroupItem
                      key={option}
                      id={`english-${option}`}
                      name="englishPreparationNeed"
                      value={option}
                      checked={formData.englishPreparationNeed === option}
                      onChange={() => updateField("englishPreparationNeed", option)}
                      label={option}
                    />
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Do you require any learning/accessibility support?</Label>
              <RadioGroup>
                <div className="grid gap-2 sm:grid-cols-3">
                  {(["Yes", "No", "Prefer to discuss"] as const).map((option) => (
                    <RadioGroupItem
                      key={option}
                      id={`support-${option}`}
                      name="accessibilitySupport"
                      value={option}
                      checked={formData.accessibilitySupport === option}
                      onChange={() => updateField("accessibilitySupport", option)}
                      label={option}
                    />
                  ))}
                </div>
              </RadioGroup>
            </div>
          </section>

          <Separator />

          <section className="space-y-3">
            <Label htmlFor="notes">Additional notes / questions</Label>
            <Textarea
              id="notes"
              className="min-h-28"
              value={formData.notes}
              onChange={(event) => updateField("notes", event.target.value)}
            />
          </section>

          <Separator />

          <section className="space-y-3">
            <h3 className="text-sm font-semibold tracking-[0.14em] uppercase text-primary/80">
              Consent
            </h3>
            <label className="flex items-start gap-2.5 text-sm leading-6 text-ink-muted">
              <Checkbox
                checked={formData.consentContact}
                onChange={(event) =>
                  updateField("consentContact", event.target.checked)
                }
                aria-invalid={fieldError("consentContact")}
              />
              <span>
                I agree for TOJ Security Training to contact me about this enquiry.
              </span>
            </label>
            <label className="flex items-start gap-2.5 text-sm leading-6 text-ink-muted">
              <Checkbox
                checked={formData.consentAccuracy}
                onChange={(event) =>
                  updateField("consentAccuracy", event.target.checked)
                }
                aria-invalid={fieldError("consentAccuracy")}
              />
              <span>
                I confirm the information provided is accurate to the best of my
                knowledge.
              </span>
            </label>
          </section>

          {attemptedSubmit && hasValidationIssues ? (
            <p className="rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-2.5 text-sm leading-6 text-amber-900">
              Complete required fields and consent checkboxes to continue.
            </p>
          ) : null}

          {showFrontendNotice ? (
            <p
              className="rounded-xl border border-brand-blue/20 bg-[hsl(var(--brand-blue)/0.08)] px-3.5 py-2.5 text-sm leading-6 text-ink"
              role="status"
              aria-live="polite"
            >
              Registration capture is ready for backend connection.
              Resend/Supabase submission will be connected next.
            </p>
          ) : null}

          <div className="space-y-2.5 pb-2">
            <PremiumButton
              type="submit"
              className="w-full bg-brand-blue-deep text-white hover:bg-primary hover:text-white sm:w-auto"
            >
              Submit registration interest
            </PremiumButton>
            <p className="text-xs leading-6 text-ink-muted">
              Online submission is frontend-only at this stage. You can also call
              or email TOJ to complete registration.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
