export async function getDashboardSummary() {
    const res = await fetch("/api/dashboard/summary");
    return res.json();
}