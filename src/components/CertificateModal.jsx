import React from 'react';
import { Award, CheckCircle2, Download, Printer } from 'lucide-react';
import { Modal } from './Modal';

export const CertificateModal = ({ isOpen, onClose, course, enrolment }) => {
  if (!course || !enrolment) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Verified Certificate of Completion"
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">
        {/* Certificate Frame */}
        <div className="border-8 border-double border-brand-navy/30 p-8 bg-gradient-to-br from-white via-[#faf9ff] to-white rounded-2xl relative shadow-lg text-center font-serif text-brand-navy">
          {/* Top Stamp / Badge */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-brand-navy text-brand-lightLavender flex items-center justify-center shadow-md">
              <Award size={34} />
            </div>
          </div>

          <p className="text-xs font-sans uppercase tracking-widest text-brand-textSecondary font-bold mb-1">
            SkillBridge EdTech Academy • Bengaluru
          </p>
          <h2 className="text-2xl font-bold font-poppins text-brand-navy tracking-tight mb-2">
            CERTIFICATE OF COMPLETION
          </h2>
          <p className="text-xs font-sans text-brand-textSecondary mb-6">
            This is proudly presented to certify that
          </p>

          {/* Student Name */}
          <div className="text-2xl font-bold font-poppins text-brand-navy border-b-2 border-brand-lavender/60 pb-2 inline-block px-8 mb-4">
            {enrolment.learner?.fullName || "Madhumithra R."}
          </div>

          <p className="text-xs font-sans text-brand-textSecondary max-w-lg mx-auto mb-2">
            has successfully fulfilled all curriculum requirements, hands-on capstones, and assessments for the program:
          </p>

          {/* Course Name */}
          <h4 className="text-lg font-bold font-poppins text-brand-navy max-w-xl mx-auto mb-6">
            {course.title}
          </h4>

          {/* Signatures & Verification Row */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border text-left font-sans text-xs">
            <div>
              <p className="text-[10px] text-brand-textSecondary uppercase font-bold">Lead Instructor</p>
              <p className="font-semibold text-brand-navy font-poppins">{course.instructor.name}</p>
              <p className="text-[10px] text-brand-textSecondary">SkillBridge Faculty Lead</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-brand-textSecondary uppercase font-bold">Credential ID</p>
              <p className="font-mono text-xs font-bold text-brand-navy">{enrolment.enrolmentId}-CERT</p>
              <p className="text-[10px] text-emerald-600 font-semibold flex items-center justify-center gap-1">
                <CheckCircle2 size={11} /> Digitally Verified
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-brand-textSecondary uppercase font-bold">Awarded Date</p>
              <p className="font-semibold text-brand-navy font-poppins">
                {new Date(enrolment.enrolledAt).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
              <p className="text-[10px] text-brand-textSecondary">Bengaluru, India</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 bg-brand-navy hover:bg-brand-navy/90 text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-sm transition-all"
          >
            <Printer size={16} />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};
